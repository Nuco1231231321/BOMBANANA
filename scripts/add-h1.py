import os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

pages = {
    "src/content/modules/OverviewModulePage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Modules">BOMBANANA! Bomb Modules Overview</PageTitle>'
    ),
    "src/content/modules/WireModulePage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Wire Module">Wire Module Guide: Read, Confirm, and Cut Safely</PageTitle>'
    ),
    "src/content/modules/ButtonModulePage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Button Module">Button Module Guide: Press, Hold, and Decide Before You Act</PageTitle>'
    ),
    "src/content/modules/SwitchModulePage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Switch Module">Switch Module Guide: Track the State, Then Flip in Order</PageTitle>'
    ),
    "src/content/modules/SymbolsModulePage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Symbols Module">Symbols Module Guide: Match Glyphs and Keep Your Callouts Clean</PageTitle>'
    ),
    "src/content/roles/BlindMonkeyPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Blind Monkey">Blind Monkey Guide: See No Evil, Defuse Everything</PageTitle>'
    ),
    "src/content/roles/DeafMonkeyPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Deaf Monkey">Deaf Monkey Guide: Hear No Evil, Lead the Team</PageTitle>'
    ),
    "src/content/roles/MuteMonkeyPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Mute Monkey">Mute Monkey Guide: Speak No Evil, Know All Answers</PageTitle>'
    ),
    "src/content/beginners/HowToPlayPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="How to Play">How to Play BOMBANANA!: Your First Session Walkthrough</PageTitle>'
    ),
    "src/content/beginners/FirstSessionChecklistPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Checklist">BOMBANANA! First Session Checklist: Complete Pre-Game Setup</PageTitle>'
    ),
    "src/content/beginners/BeginnerMistakesPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Beginner Mistakes">10 BOMBANANA! Beginner Mistakes and How to Fix Them</PageTitle>'
    ),
    "src/content/communication/TeamCalloutsPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Team Callouts">BOMBANANA! Team Callouts: Standard Phrases for Fast Communication</PageTitle>'
    ),
    "src/content/communication/VoiceChatSettingsPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Voice Chat">BOMBANANA! Voice Chat Settings: Configure In-Game Communication</PageTitle>'
    ),
    "src/content/communication/CommunicationChainPage.tsx": (
        'import { PageTitle } from "@/components/guide/PageTitle";',
        '<PageTitle highlight="Communication Chain">BOMBANANA! Communication Chain: How Information Flows Between Roles</PageTitle>'
    ),
}

for filepath, (import_line, h1_tag) in pages.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'PageTitle' not in content:
        lines = content.split('\n')
        last_guide_import = -1
        for i, line in enumerate(lines):
            if 'from "@/components/guide/' in line or 'from "./' in line or 'from "../' in line:
                last_guide_import = i
        if last_guide_import >= 0:
            lines.insert(last_guide_import + 1, import_line)
            content = '\n'.join(lines)

    content = content.replace(
        '<BlufBox title="At a Glance">',
        h1_tag + '\n      <BlufBox title="At a Glance">'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK {filepath}")

print("Done!")
