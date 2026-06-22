---
title: "Voice Chat Settings — Configure In-Game Communication"
description: "Complete guide to BOMBANANA! voice chat settings. Configure microphone, understand role-based restrictions, and optimize audio quality."
date: "2026-06-22"
category: "communication"
difficulty: "beginner"
tags: ["voice chat", "settings", "microphone", "audio", "configuration"]
order: 2
image: "/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg"
---

## BOMBANANA! Voice Chat System

The in-game voice chat is NOT just a communication tool — it's a core game mechanic. Role-based restrictions are enforced by the game:

- **Blind Monkey** — Can hear AND speak (full two-way)
- **Deaf Monkey** — Can speak but CANNOT hear (output only, no input)
- **Mute Monkey** — Can hear but CANNOT speak (input only, no output)

These restrictions cannot be disabled. They ARE the game.

![Voice Chat Settings](/images/screenshots/ss_24c16a36e29f2309b796e7b2b284386c43948e69.thumb.jpg)

## Initial Microphone Setup

### Windows Setup

1. Right-click the speaker icon in the system tray → **Sounds**
2. Go to the **Recording** tab
3. Find your microphone → right-click → **Set as Default Device**
4. Right-click again → **Properties** → **Levels** tab
5. Set microphone volume to **80-90%** (too high causes distortion)
6. Go to the **Enhancements** tab → check **Disable all sound effects** (prevents processing lag)

### Steam Voice Settings

1. Open Steam → **Settings** (top-left menu)
2. Go to **Voice** tab
3. **Voice Input Device** — select your microphone
4. **Voice Output Device** — select your headphones
5. Click **Test Microphone** — speak and verify the green bar moves
6. **Voice Transmission Type** — set to **Voice Activated** (Open Mic)
7. **Voice Activation Threshold** — move the slider to **Medium** (adjust if too sensitive or not sensitive enough)

### In-Game Settings

Once BOMBANANA! is running:
1. Open **Settings** from the main menu
2. Go to **Audio**
3. Verify the correct input/output devices are selected
4. **Master Volume** — 70-80%
5. **Voice Chat Volume** — 80-100%

## Troubleshooting Voice Issues

### "My Teammate Can't Hear Me"

Checklist for the speaker:
- [ ] Is Steam Voice Input set to the correct microphone?
- [ ] Is Windows microphone privacy enabled? (Settings → Privacy → Microphone → Allow apps)
- [ ] Are you the Mute Monkey? **If yes, this is intentional — Mute cannot speak.**
- [ ] Is your microphone muted? Check physical mute button on headset.

### "I Can't Hear My Teammate"

Checklist for the listener:
- [ ] Is Steam Voice Output set to the correct headphones?
- [ ] Is Windows volume up? Check both system volume AND app-specific volume (Volume Mixer).
- [ ] Are you the Deaf Monkey? **If yes, this is intentional — Deaf cannot hear.**
- [ ] Is the Blind Monkey actually speaking? Verify their mic is working (ask them to tap it).

### Audio Echo / Feedback

- [ ] **Everyone must use headphones.** Speaker audio leaks into microphones.
- [ ] Lower microphone sensitivity in Steam Voice settings.
- [ ] Move the microphone further from your headphones/speakers.
- [ ] Enable push-to-talk if open mic echo persists (set in Steam Voice settings).

## External Voice Chat: Should You Use It?

**Technical answer:** You can use Discord, Teamspeak, or any external voice app.

**Gameplay answer:** You shouldn't.

Using external voice chat removes the role restrictions — the Mute can now speak, and the Deaf can now hear. This transforms BOMBANANA! from a unique communication-challenge game into a simple puzzle game. You lose the core experience.

The only time external voice chat is justified:
- **Accessibility accommodations** — if a player has a genuine communication disability that the in-game restrictions compound unfairly
- **Streaming setup** — streamers may need to communicate with viewers on a separate channel

For normal play: use in-game voice. The chaos is the point.

## Advanced Audio Optimization

- **Disable audio enhancements** in Windows — spatial sound, bass boost, and other processing add latency.
- **Use wired headphones** — Bluetooth can introduce 100-200ms of audio delay, which matters in timed sequences.
- **Close other audio apps** — Spotify, YouTube, Discord. They compete for audio device access.
- **Sample rate:** Set to 16-bit 48000 Hz in Windows Sound settings for best compatibility with Steam Voice.
