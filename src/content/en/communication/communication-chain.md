---
title: "Communication Chain — How Information Flows in BOMBANANA!"
description: "Deep dive into the BOMBANANA! communication chain. Understand how information flows from manual to bomb through three disabled monkeys."
date: "2026-06-22"
category: "communication"
difficulty: "intermediate"
tags: ["communication chain", "information flow", "teamwork", "system design"]
order: 3
image: "/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg"
---

## The Communication Chain

The communication chain is the backbone of BOMBANANA! Information must travel through three monkeys, each with a different disability, before reaching the bomb. Understanding this chain — and where it breaks — is the key to consistent defusals.

![Communication Chain Diagram](/images/screenshots/ss_71217070b739545c452accf9e600c6ca72832e64.thumb.jpg)

## The Chain Visualized

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌──────────┐
│  MANUAL     │ →   │ MUTE 🙊     │ →   │ DEAF 🙉     │ →   │ BLIND 🙈 │ → BOMB
│  (paper)    │     │ reads it    │     │ interprets  │     │ executes │
│             │     │ can't speak │     │ can't hear  │     │can't see │
└─────────────┘     └─────────────┘     └─────────────┘     └──────────┘
     SOURCE          TRANSFORM #1        TRANSFORM #2         EXECUTION
```

Each arrow is a **potential failure point**. Information degrades at every transfer. Your goal: minimize information loss at each step.

## Step-by-Step Chain Analysis

### Stage 1: Manual → Mute Monkey

**Input:** Written text, diagrams, flowcharts in the defusal manual
**Output:** The Mute's internal understanding of the solution
**Challenge:** Under time pressure, the Mute must find the correct section and parse complex instructions quickly

**Common failure:** Mute opens wrong manual section → gestures wrong solution

**Prevention:**
- Deaf clearly announces module type: *"WIRE MODULE — 5 wires"*
- Mute confirms by pointing to the module → manual section → thumbs up
- Practice manual navigation outside of live bombs

### Stage 2: Mute Monkey → Deaf Monkey

**Input:** The Mute's gestures and body language
**Output:** The Deaf's interpretation of what the Mute means
**Challenge:** Gestures are inherently ambiguous. No words. No text. Pure body language.

**Common failure:** Deaf misinterprets a gesture → gives wrong instruction → Blind executes wrong action

**Prevention:**
- Pre-agreed gesture vocabulary — every gesture has ONE meaning
- Mute waits for Deaf's thumbs-up before next gesture
- Deaf shakes head if unclear → Mute repeats gesture differently
- Practice common gesture sequences before the session

**Information loss at this stage is the #1 cause of failed defusals.**

### Stage 3: Deaf Monkey → Blind Monkey

**Input:** The Deaf's spoken instructions
**Output:** The Blind's physical actions on the bomb
**Challenge:** The Blind cannot see what they are doing. Every action is guided purely by voice.

**Common failure:** Blind miscounts wires/buttons → acts on wrong target → strike

**Prevention:**
- Standardized position language: numbered left to right, top to bottom
- Blind ALWAYS repeats the instruction before executing
- Deaf ALWAYS confirms visually before giving the "go" signal
- Blind narrates touch feedback: *"Third wire feels thicker than the others"*

### Stage 4: Blind Monkey → Bomb (Execution)

**Input:** Physical action — cutting, pressing, holding, flipping
**Output:** Module complete (green light) or strike (red flash)
**Challenge:** Fine motor control under extreme time pressure

**Common failure:** Rushing causes imprecise actions (cutting adjacent wire, pressing wrong button)

**Prevention:**
- Slow is smooth, smooth is fast. One precise action beats three rushed ones.
- Blind keeps anchor hand on a fixed reference point
- Deaf watches execution and can call "STOP" if Blind's hand drifts

## Reverse Flow: Feedback Loops

Communication is not one-way. Feedback flows backward through the chain:

```
BOMB RESULT → BLIND reports → DEAF announces → MUTE sees result → MANUAL (next step)
```

### Feedback Loop #1: Blind → Deaf → Mute

After each action, the Blind reports the result:
- *"Done — module light turned... [asking Deaf to check]"*
- *"ERROR — hands off"*

The Deaf processes and announces the result:
- *"Green! Module complete. Next: Keypad."*
- *"Strike. 2 remaining. Reset — we're starting this module over."*

The Mute sees the result and prepares the next solution.

### Feedback Loop #2: Mute → the Chain (Correction)

If the Mute sees the Blind doing the wrong thing:
- Mute does **thumbs down vigorously** + repeats the correct gesture
- Deaf sees this → *"STOP — new instruction: [corrected action]"*
- Blind stops immediately and follows the new instruction

This correction loop is critical. Never continue with a wrong action just because you've started it.

## Optimizing the Chain

### Before the Session

1. **Agree on gesture vocabulary** (15 key gestures minimum)
2. **Practice common sequences** in Free Mode without time pressure
3. **Rotate roles** so everyone understands each position's challenges
4. **Review callout templates** — use the exact phrases from our [Team Callouts guide](/communication/team-callouts)

### During Each Bomb

1. **Hardest module first** — when communication is freshest and strikes are unused
2. **One module at a time** — never split the chain across two modules
3. **Deaf is the gatekeeper** — no action happens without Deaf's "Confirmed"
4. **Timer calls at every threshold** — 60s, 30s, 10s

### When the Chain Breaks

1. **Identify the break point:** Was it gesture interpretation? Miscounting? Wrong manual section?
2. **Reset that stage:** Don't push through — go back one step in the chain
3. **Switch communication method:** If a gesture isn't working, try a different one
4. **Stay calm:** Frustration amplifies communication breakdown
