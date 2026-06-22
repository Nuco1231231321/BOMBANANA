---
title: "BOMBANANA! Troubleshooting — Fix Common Issues"
description: "Fix common BOMBANANA! issues: connection problems, voice chat not working, lobby errors, demo issues, and technical troubleshooting guide."
date: "2026-06-22"
category: "support"
tags: ["troubleshooting", "bugs", "fix", "technical", "help"]
order: 1
---

## Connection & Lobby Issues

### Cannot Join Lobby

**Symptoms:** You see a "Connection Failed" error or the lobby invite does not work.

**Fixes:**
1. **Verify all 3 players are on the same version.** Demo players cannot join full-game lobbies and vice versa. Check your Steam library — everyone should be using the same app (either Demo app 4747510 or full game app 4656000).
2. **Restart Steam.** Close Steam completely (right-click the system tray icon → Exit), then relaunch.
3. **Check your internet connection.** A stable broadband connection is required. Try disabling VPNs or proxies temporarily.
4. **Steam Download Region.** In Steam → Settings → Downloads, set all three players to the **same download region**.
5. **Host the lobby from a different player.** If Player A cannot host, try having Player B create the lobby instead.
6. **Verify Steam Friends is online.** The Steam Friends network must be connected (check the Friends List window in Steam).

### Friends Not Appearing in Invite List

**Fixes:**
1. Make sure all players have the game launched and are on the main menu.
2. Ensure Steam overlay is enabled (Steam → Settings → In Game → Enable Steam Overlay).
3. Restart the game on all three PCs.
4. Verify that all three Steam accounts are friends with each other.

### Game Not Showing as Installed

**Fixes:**
1. Go to Steam Library → right-click BOMBANANA! Demo → Manage → Verify that it shows "Installed".
2. If it shows "Install" despite you having played before, click Install — the Demo may have updated and requires re-download (only ~300 MB).
3. Check your Steam Library filters — make sure "Tools" and "Demos" are not hidden.

---

## Voice Chat Issues

### Voice Chat Not Working

**Symptoms:** Cannot hear teammates, or teammates cannot hear you.

**Fixes:**
1. **Check your role restrictions.** The Deaf Monkey cannot hear — this is intentional. The Mute Monkey cannot speak — also intentional. If you are the Deaf Monkey and cannot hear anyone, the game is working correctly. If you are the Mute Monkey and cannot speak, the game is working correctly.
2. **Verify your microphone is selected.** In Steam → Settings → Voice, check that the correct input device is selected. Use the "Test Microphone" button.
3. **Check Windows sound settings.** Right-click the speaker icon → Sounds → Recording tab. Ensure your microphone is enabled and set as the default device.
4. **Push-to-talk setting.** By default, BOMBANANA! uses open mic. Check the in-game audio settings for push-to-talk configuration.
5. **Voice chat permissions.** Windows may be blocking microphone access. Go to Windows Settings → Privacy → Microphone → ensure Steam and BOMBANANA! are allowed.

### Audio Echo or Feedback

**Fixes:**
1. Use headphones instead of speakers — speaker audio can leak into your microphone.
2. Lower your microphone sensitivity in Steam Voice settings.
3. Enable push-to-talk if open mic is causing issues.

---

## Performance & Launch Issues

### Demo Not Launching / Crashing on Startup

**Fixes:**
1. **Verify game files.** Steam Library → right-click BOMBANANA! Demo → Properties → Installed Files → Verify integrity of game files.
2. **Update graphics drivers.** Download the latest drivers from NVIDIA, AMD, or Intel. Old drivers are the most common cause of launch crashes.
3. **Run as administrator.** Navigate to the game installation folder, right-click the .exe, select Properties → Compatibility → Run this program as an administrator.
4. **Disable overlays.** Discord overlay, NVIDIA GeForce Experience overlay, and other third-party overlays can conflict. Disable them temporarily.
5. **Check Windows updates.** Ensure Windows 10/11 is fully updated (Settings → Windows Update).
6. **Antivirus false positive.** Some antivirus software may block the game. Add BOMBANANA! to your antivirus exclusion list.

### Low FPS / Stuttering

**Fixes:**
1. Lower graphics settings in the in-game options menu.
2. Close background applications (especially browsers with many tabs).
3. Ensure your PC meets the minimum requirements (Intel HD Graphics 520 or better).
4. Disable V-Sync in graphics settings if experiencing input lag.

### Game Freezes During a Bomb

**Fixes:**
1. This is rare but can happen on lower-end hardware. Lower your graphics settings.
2. Verify game files (see above).
3. Restart the game and have your teammates re-invite you.

---

## Team Setup & Communication

### Team Communication Is Confusing

**This is the game working as intended!** BOMBANANA! is designed to create communication chaos. However, here are tips to reduce frustration:

1. **Establish gestures before starting.** Spend 5 minutes agreeing on a gesture vocabulary with your Mute and Deaf teammates.
2. **Use the confirmation loop.** Blind always repeats instructions back; Deaf always confirms before Blind acts.
3. **Check roles are assigned correctly.** Only one player per role. If two players accidentally pick Blind, the game will not function.
4. **Start on easy bombs.** Don't jump into hard levels immediately. Use the first few campaign levels to build team rhythm.

### Can't Invite Friends

**Fixes:**
1. Ensure all three players have each other added as Steam friends.
2. All players must have the game running and be on the main menu.
3. Try having a different player host the lobby.
4. Restart Steam on all three PCs.

---

## Demo vs Full Game Confusion

### Which Version Should I Install?

| Situation | Install |
|-----------|---------|
| You want to try the game for free | BOMBANANA! Demo (app 4747510) |
| You own the full game | BOMBANANA! (app 4656000) |
| Your friend has the Demo | You must also use the Demo |
| Your friend has the full game | You must also have the full game |

**Important:** Demo players and full-game players **may not** be able to play together. Everyone in your group should be on the same version.

### I Bought the Full Game But the Demo Is Launching

Uninstall the Demo: Steam Library → right-click BOMBANANA! Demo → Manage → Uninstall. Then launch the full game from your library.

---

## Still Having Issues?

If none of the above fixes work:

1. **Check the Steam Community Hub** for BOMBANANA! — other players may have found solutions.
2. **Join the official BOMBANANA! Discord** and ask in the #tech-support channel.
3. **Contact Lefto Studio support:** support@leftostudio.com
4. **Include these details in your report:** your PC specs, Windows version, what happened, and any error messages you saw.
