import React, { useState, useRef } from 'react';

/**
 * AudioPlayer - Soothing Web-Audio Ambient Sound Generator
 * Mimics Natural Aceh Radio / Nature stream directly in browser
 */
export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef(null);

  const toggleAudio = () => {
    if (!playing) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Generate soothing ambient ocean/wind sound using pink noise buffer
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99 * b0 + white * 0.05;
          b1 = 0.96 * b1 + white * 0.11;
          b2 = 0.86 * b2 + white * 0.25;
          data[i] = (b0 + b1 + b2) * 0.08;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        noise.start();
        setPlaying(true);
      } catch {
        setPlaying(true);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
        playing
          ? 'bg-emerald-900/20 text-emerald-800 border-emerald-500/50'
          : 'bg-stone-100 text-stone-600 border-stone-200 hover:border-stone-300'
      }`}
      title="Suara Alam Aceh (Live Ambience Player)"
    >
      <span className="relative flex h-2 w-2">
        {playing && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            playing ? 'bg-emerald-500' : 'bg-stone-400'
          }`}
        ></span>
      </span>
      <span className="hidden sm:inline">
        {playing ? 'Suara Alam: Aktif' : 'Suara Alam'}
      </span>
      {playing ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
}
