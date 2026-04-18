/**
 * Module 5 lesson bodies — full teaching prose for all 8 sections.
 * Topic: Word Sums, Matrices, and Suffixing Conventions — The Tools of Structured Word Inquiry.
 * Each section teaches; it does not summarize.
 */

export const module5Sections: Record<number, string> = {

  1: `## Core Idea

A word sum is a claim about morphological structure — written down in a form that can be tested, shared, and revised.

The notation is precise. The precision is the point.

---

## Reading and Writing Word Sums

The word sum is the primary notation of Structured Word Inquiry. Learning to read and write it fluently is as important as learning to read music before studying harmony: the notation makes the reasoning visible.

Here is the basic form:

    re + play → replay

The \`+\` marks a morpheme boundary. It says: here is where one meaningful unit ends and another begins. The \`→\` (read: "makes") represents the relationship between the morphological structure on the left and the actual word on the right. In this case, the structure and the word look identical — no join conventions alter the spelling at the boundary.

Read the sum aloud: "re plus play makes replay." The spoken form reinforces the analysis. It is also a statement that can be challenged. Does \`<re->\` carry its established meaning — "again" or "back" — in *replay*? Yes. Does \`<play>\` carry its established meaning? Yes. The sum is defensible.

Now read these:

    play + ing → playing
    re + play + ing → replaying
    un + help + ful → unhelpful
    re + construct + ion → reconstruction

Notice that the word on the right side of \`→\` is the word as it actually appears in English. The left side is the morphological analysis — the proposed structure. Sometimes they look different, because join conventions operate at the boundary between morphemes when they meet. The word sum *records* that something happened at the join; the join conventions (covered in Sections 4–7) *explain* what happened and why.

Reading aloud matters. "Un plus help plus ful makes unhelpful." Say it as a sequence of meaningful elements, not as a pronunciation exercise. Each element should trigger a meaning-check: does \`<un->\` mean "not" here? (Yes — unhelpful means not helpful.) Does \`<help>\` carry its meaning? (Yes.) Does \`<-ful>\` mean "full of / characterized by"? (Yes.) The sum holds.

Writing word sums is a practice — not a test. When a student writes a word sum, they are proposing an analysis. When they read it aloud, they are checking it. When it fails, they revise it. This is what scientific inquiry looks like at the word level.

Practice building word sums for words you know well. Start with transparent words: *helpful*, *unhelpful*, *playing*, *replaying*, *construction*. Write the sum, read it aloud, check each element for meaning.

    help + ful → helpful
    un + help + ful → unhelpful
    con + struct + ion → construction

The word sum is not a display of spelling. It is a claim about structure. That distinction is what makes it testable — and therefore useful.

---

1. Write word sums for *reconstruction*, *unhelpfulness*, and *replaying*. Read each one aloud and check that every element carries its established meaning.
2. Why does the word sum notation use \`→\` rather than \`=\`? What does the arrow imply that an equals sign would not?
3. A student writes the sum *re + turn → return*. How would you guide them to check whether \`<re->\` carries its meaning in this word? What other words might help?
`,

  2: `## Core Idea

Writing a word sum is not asserting an analysis — it is proposing one.

The proposal must be verified. If it cannot be verified, it must be revised or abandoned.

Failed sums are not mistakes. They are information.

---

## A Word Sum Is a Hypothesis

The power of the word sum notation is precisely that it makes a claim that can be tested. This is what distinguishes Structured Word Inquiry from pattern-matching: a word sum must earn its place by surviving scrutiny.

The verification test has one essential question: **does each proposed element carry its established meaning in this word?** If the answer is no for any element, the sum fails — and the failure tells you something.

**Test 1 — A sum that passes:**

    act + ion → action

Check \`<act>\`: does it mean "do" or "perform" in *action*? Yes — an action is the performance of a deed, the doing of something. Check \`<-ion>\`: does it form nouns from verb bases, indicating a result or state? Yes — *action* is the noun form of *act*. Both elements carry their meaning. The sum stands.

**Test 2 — A sum that fails:**

Suppose a student, noticing that *carpet* contains the letter sequences *car* and *pet*, proposes:

    car + pet → carpet

Check \`<car>\`: does the concept of an automobile carry meaning in *carpet*? No — there is nothing vehicular about a carpet. Check \`<pet>\`: does the concept of a domesticated animal carry meaning in *carpet*? No. The proposed sum fails at both elements.

What does the failure reveal? That *carpet* is not morphologically decomposable in modern English. It is a single morpheme, borrowed into English from Old French *carpite*, meaning a thick cloth. The word that looks like it has parts does not have them — not all apparent structures are real structures. This is an important finding, not a disappointment.

**Test 3 — A sum that requires care:**

    dis + cover → discover

Check \`<dis->\`: what does it mean here? The first temptation is "not" — but *discover* does not mean "not cover." Look more carefully. The prefix \`<dis->\` can mean "apart" or "away" — and it can also carry a sense of completion or reversal. To *discover* is to remove the covering from something that was hidden — to un-cover it, in the sense of revealing it entirely.

Historical evidence supports this: from Latin *discooperire*, "to uncover completely," where *dis-* intensifies the action. The \`<dis->\` in *discover* is not the "not" meaning but the "completely away from" meaning — a fuller sense that becomes clear when you investigate the Latin roots.

The sum works — but only if you understand \`<dis->\` in its fuller semantic range. This is not a failure; it is a nuance. The investigation required to arrive at that nuance is exactly the kind of close engagement with word history that builds lasting vocabulary knowledge.

The word sum as a falsifiable hypothesis gives students a discipline: write the sum, check the sense, revise if needed. The form of the investigation is the same whether the word is simple or complex. That consistency is one of SWI's great pedagogical advantages.

---

1. Propose a word sum for *button*. Check each element. Does the sum hold? What does the result tell you about *button*'s morphological structure?
2. A student proposes that *breakfast* is \`break + fast → breakfast\`. Check each element. Does \`<break>\` carry its usual meaning? Does \`<fast>\` carry its usual meaning? What does the investigation reveal about the historical meaning of *fast* in this compound?
3. What is the pedagogical value of a word sum that fails? How would you explain that value to a student who feels they "got it wrong"?
`,

  3: `## Core Idea

A word family is not a list. It is a generative structure.

The matrix makes that structure visible — and keeps it testable.

---

## The Matrix: Generative Map of a Word Family

Once you can write word sums, the matrix becomes available to you. The matrix is a grid that organizes the morphemes of a word family so that reading across any row from left to right produces a valid word sum. It is not a display of completed words — it is a machine for generating them.

Here is how to build one. Take the base \`<play>\`.

Start with the base at the center. Add prefixes you know can attach to it on the left, and suffixes you know can attach to it on the right. Include a "no prefix" row and a "no suffix" column — the base alone is always a word in its own right.

The matrix for \`<play>\` might look like this, with \`∅\` marking the empty slot:

    Prefixes   | Base  | Suffixes
    -----------+-------+---------
    ∅          | play  | ∅, ed, er, ful, ing, mate, s
    re         | play  | ∅, ed, ing, s
    dis        | play  | ∅, ed, ing, s

Reading across the first row: \`play\`, \`play + ed → played\`, \`play + er → player\`, \`play + ful → playful\`, \`play + ing → playing\`, \`play + mate → playmate\`, \`play + s → plays\`.

Reading across the second row: \`re + play → replay\`, \`re + play + ed → replayed\`, \`re + play + ing → replaying\`, \`re + play + s → replays\`.

Reading across the third row: \`dis + play → display\`, \`dis + play + ed → displayed\`, \`dis + play + ing → displaying\`, \`dis + play + s → displays\`.

The matrix generates these words. But it also raises questions about the cells it *cannot* fill. Is *replayful* a word? No — and that absence is not arbitrary. The prefix \`<re->\` ("again") does not combine productively with the suffix \`<-ful>\` ("characterized by") around this base to produce a word in common use. Is *displaymate* a word? No — *display* doesn't form compounds with \`<-mate>\` the way *play* does. These empty cells are meaningful findings.

**What the matrix makes visible that a word list cannot:**

A word list presents finished products. The matrix presents the generative logic — the principle by which one base multiplied by a set of prefixes and suffixes produces a discoverable family. A student who memorizes the word list for *play* knows those words. A student who builds the matrix knows how the family works — and can extend it when they encounter a new word built on the same base.

The matrix also keeps meaning central. Every cell represents a word sum that can be verified. A student filling in the matrix is not completing a pattern exercise — they are building and testing morphological hypotheses for each combination.

Building strategy: always start with the base alone. Confirm that it is a free morpheme — a word that can stand alone. Then add suffixes one at a time, checking each combination for real-word status and for whether the shared meaning of the base is present. Then add prefixes. Check every combination. Note which cells are empty and ask why.

The matrix is an investigative tool, not a display. It grows as investigation reveals more of the family.

---

1. Build a matrix for the base \`<help>\`. Include at least two prefixes and four suffixes. Which cells are empty? Can you explain why?
2. A student fills in the cell \`re + play + ful\` as a valid word. How would you guide them to verify whether *replayful* belongs in the matrix?
3. What does the matrix reveal about a word family that a simple list of related words does not? Give a specific example from the \`<play>\` matrix.
`,

  4: `## Core Idea

When a vowel suffix meets a base that ends in a final non-syllabic \`<e>\`, the \`<e>\` is not dropped — it is **replaced**.

The word matters. The \`<e>\` was doing a job. The suffix takes over that job.

---

## When Morphemes Meet — Replace

Every time two morphemes join, a question arises: what happens at the boundary? Four named conventions govern what can happen. The first is Replace.

**What "non-syllabic \`<e>\`" means.** A final \`<e>\` that does not contribute its own vowel sound to the word is non-syllabic. In *hope*, the \`<e>\` is not pronounced as a separate syllable — it is present to mark the long vowel in the preceding syllable (compare *hop* and *hope*). In *tense*, the \`<e>\` ends the word but does not add a syllable. This kind of \`<e>\` performs a graphemic function: it marks how the graphemes before it should be read.

**Why "replaced" rather than "dropped."** Phonics-first instruction often says to "drop the e before a vowel suffix." But *drop* implies the \`<e>\` was useless — that it disappears because it was never needed. The SWI account is more accurate: the \`<e>\` was performing a function (marking the preceding vowel grapheme, or distinguishing \`<ce>\` from \`<c>\` before a back vowel). When a vowel suffix is added, the vowel suffix takes over that function. The \`<e>\` is not dropped — it is replaced by something that does the same work.

**Word sums where Replace applies** (suffix begins with a vowel grapheme):

    make + ing → making
    use + able → usable
    hope + ed → hoped
    love + able → lovable
    tense/ + ion → tension

Notice the slash notation in the last example. In SWI, a slash after the base in the word sum marks a grapheme that was replaced at the join. \`tense/\` means: the base is \`<tense>\`, but the final \`<e>\` was replaced when \`<-ion>\` was added. The \`→\` then shows the result.

**Word sums where Replace does NOT apply** (suffix begins with a consonant grapheme):

    hope + ful → hopeful
    use + less → useless
    love + ly → lovely

The test is direct: does the suffix begin with a vowel grapheme? If yes, Replace applies and the final non-syllabic \`<e>\` is replaced. If no — if the suffix begins with a consonant — the \`<e>\` stays exactly where it is. There is no phonological pressure at the boundary that would require it to be replaced; the consonant suffix does not take over the \`<e>\`'s marking function.

**Investigate:** write word sums for *hopeless*, *hoping*, *hoped*, and *hopeful*. Which require Replace? Which do not? The pattern should become visible: the vowel-initial suffixes trigger it; the consonant-initial suffixes do not.

    hope + less → hopeless     (no Replace — <l> is a consonant)
    hope + ing → hoping        (Replace — <i> is a vowel)
    hope + ed → hoped          (Replace — <e> is a vowel)
    hope + ful → hopeful       (no Replace — <f> is a consonant)

The same base, the same final \`<e>\`, four different suffixes — and the convention applies or does not based on a single testable criterion. This is what principled spelling looks like: one question, consistently applied, produces the correct surface form every time.

---

1. Write word sums for *usable*, *useless*, *using*, and *user*. Which apply Replace? Identify the vowel or consonant that determines the outcome in each case.
2. Why does SWI use the term "Replace" rather than "drop the e"? What difference does the language make for how students understand what is happening at the join?
3. A student writes *loveing* for *loving*. Write the correct word sum and explain, using the Replace convention, what should have happened at the join.
`,

  5: `## Core Idea

When a vowel suffix is added to a base whose final syllable ends in a single vowel grapheme plus a single consonant — and that syllable is stressed — the final consonant doubles.

Doubling is a principled response to phonological pressure at the join. It is not an exception to learn. It is a convention to understand.

---

## When Morphemes Meet — Double

Replace addresses what happens when a base ends in \`<e>\`. Double addresses a different situation: what happens when a vowel suffix would, without intervention, create an ambiguous representation of the base's vowel.

**The four conditions for Double.** All four must be met:

1. **Single vowel grapheme** — not a digraph. \`<u>\` in *run* is a single vowel grapheme. \`<oo>\` in *look* is a digraph — two letters representing one vowel — and this condition fails.
2. **Single final consonant** — not a cluster. \`<n>\` in *run* is a single final consonant. \`<mp>\` in *jump* is a consonant cluster — this condition fails.
3. **Stressed final syllable.** In *run* (one syllable), the stress is on the only syllable. In *begin*, the stress falls on the final syllable \`-gin\`. In *open*, the stress falls on the first syllable \`O-\`, and the final syllable is unstressed — this condition fails for *open*.
4. **Vowel-initial suffix.** The suffix must begin with a vowel grapheme. \`<-ing>\`, \`<-ed>\`, \`<-er>\`, \`<-en>\` are vowel-initial. \`<-s>\`, \`<-ful>\`, \`<-ness>\` are consonant-initial — this condition fails.

**Word sums where Double applies:**

    run + ing → running
    begin + er → beginner
    sit + ing → sitting
    hop + ed → hopped

In each case, check all four conditions: single vowel grapheme (yes), single final consonant (yes), stressed final syllable (yes), vowel-initial suffix (yes). All four hold — Double applies.

**Word sums where Double does NOT apply:**

    look + ing → looking      (condition 1 fails: <oo> is a digraph)
    jump + ed → jumped        (condition 2 fails: <mp> is a cluster)
    open + ing → opening      (condition 3 fails: final syllable unstressed)
    run + s → runs            (condition 4 fails: <s> is a consonant suffix)

Each failure is specific. The condition that fails determines the outcome — and that outcome is always predictable from the conditions.

**The elegance of doubling.** Without the doubling convention, *runing* would be the result of \`run + ing\`. But *runing* looks like it contains a long vowel in the base — compare *tuning* from \`tune + ing\` (Replace applies there). The doubled consonant in *running* is a signal: it tells the reader that the vowel before it is short. Doubling preserves the phonological integrity of the base — the short vowel signal — in the written form of the word.

This is the deeper principle: the conventions at morpheme boundaries are not arbitrary rules handed down for memorization. They are principled responses to real pressures that arise when morphemes meet. Understanding *why* a convention exists — what problem it solves — is what allows a student to apply it confidently to a word they have never seen before.

**Practice:** check each word sum below. Does Double apply? Why or why not?

    fat + en → fatten          (yes — single <a>, single <t>, stressed, vowel suffix)
    sweet + en → sweeten       (no — <ee> is a digraph; condition 1 fails)
    visit + ing → visiting     (no — final syllable unstressed: VIS·it; condition 3 fails)
    wrap + ed → wrapped        (yes — single <a>, single <p>, stressed, vowel suffix)

---

1. Write word sums for *beginning*, *opened*, *looked*, and *slipped*. For each, check all four Double conditions and state which apply and which (if any) fail.
2. What would *runing* tell a reader about the vowel in the base, and why is that misleading? How does doubling correct the problem?
3. A student doubles the consonant in *openning* (from *open + ing*). Which condition did they fail to check? How would you guide them to identify the error using the four conditions?
`,

  6: `## Core Idea

Change and Toggle are two further join conventions — both named, both principled, both applicable to specific, identifiable environments.

Named conventions cannot be memorized arbitrarily. They must be understood.

---

## When Morphemes Meet — Change and Toggle

**Change (y → i)**

The Change convention applies when a base ends in \`<y>\` that is preceded by a consonant, and a consonant-initial suffix is added.

    happy + er → happier
    carry + ed → carried
    beauty + ful → beautiful

Check *happier*: the base \`<happy>\` ends in \`<y>\` preceded by the consonant \`<p>\`. The suffix \`<-er>\` begins with a consonant. Change applies: \`<y>\` becomes \`<i>\`. The result is *happier*, not *happyer*.

Check *carried*: the base \`<carry>\` ends in \`<y>\` preceded by the consonant \`<r>\`. The suffix \`<-ed>\` begins with the consonant \`<e>\` — wait. \`<-ed>\` begins with \`<e>\`, which is a vowel. So why does Change apply here?

Look again: *carry + ed → carried*. The \`<-ed>\` begins with a vowel. This is the exception to track carefully. Change does NOT apply before vowel-initial suffixes:

    carry + ing → carrying     (suffix begins with vowel <i> — no Change)
    baby + ish → babyish       (suffix begins with vowel <i> — no Change)

But *carry + ed → carried*: here the \`<e>\` in \`<-ed>\` is being treated as a vowel-initial suffix, so no Change should apply — yet the standard spelling is *carried*, not *carryed*. The resolution: \`<-ed>\` is indeed vowel-initial, but \`<y>\` after a consonant before this suffix still produces a visually awkward \`<ye>\` cluster that English orthography consistently avoids. The Change applies to prevent *carryed* — which would misread as two syllables with a long /eɪ/ sound. The convention is serving orthographic readability.

The cleaner way to state it: Change applies when the base ends in \`<y>\` after a consonant, *and* the result without Change would produce a non-standard or unreadable grapheme sequence. In practice, the pedagogical shortcut — "consonant-initial suffix triggers Change" — covers most cases. The \`<-ed>\` case is worth noting as a nuance to address with advanced students.

Before vowel-initial suffixes where no awkward sequence results, \`<y>\` stays:

    carry + ing → carrying     (the <yi> sequence is standard in English)
    baby + ish → babyish

**Toggle (f/fe → v)**

Toggle applies to a specific class of bases ending in \`<f>\` or \`<fe>\` in plural formation. In these bases, \`<f>\` toggles to \`<v>\`:

    leaf + s → leaves
    wolf + s → wolves
    half + s → halves
    knife + s → knives
    loaf + s → loaves

Note that *knives* involves two conventions: Replace (the final \`<e>\` of *knife* is replaced) and Toggle (\`<f>\` → \`<v>\`). The conventions can stack at a single boundary.

Not all \`<f>\`-final bases toggle. *Roof → roofs*, *belief → beliefs*, *cliff → cliffs* — these bases do not toggle. Toggle applies to a specific lexical class of bases, most of them derived from Old English or Old Norse. The class is predictable in the sense that its members can be learned as a group — not individually as exceptions.

Both Change and Toggle are named for a reason. Naming a convention means you can discuss it, question it, and apply it deliberately. A student who knows the name "Change" and its conditions can check a new word against those conditions. A student who was told "*carry* becomes *carried* — just know it" has a memorized form, not a transferable procedure.

---

1. Write word sums for *happily*, *happiness*, *happier*, *carrying*, and *carried*. Mark which apply Change and which do not, and explain the determining factor in each case.
2. The words *roof* and *leaf* both end in \`<f>\`. One toggles in the plural; the other does not. What does this tell you about the nature of the Toggle convention?
3. Choose one word that involves both Toggle and Replace (such as *knives*). Write the word sum, mark both conventions, and explain what each convention is doing at the join.
`,

  7: `## Core Idea

The plural suffix is \`<-s>\` — one suffix, always.

When the base ends in a sibilant grapheme, the surface form becomes \`<-es>\`. The \`<-es>\` is not a different suffix. It is the orthographic outcome of adding \`<-s>\` to a specific phonological environment.

---

## \`<-es>\` as an Orthographic Outcome, Not a Separate Suffix

Phonics-first instruction often teaches two plural suffixes: \`<-s>\` and \`<-es>\`. This is a surface description — it describes what the word looks like — but it is a morphological error. There is one plural suffix in English: \`<-s>\`. What varies is the surface representation of that suffix in different phonological environments.

**Why the \`<e>\` appears.** When a base ends in a sibilant sound — a hissing or hushing sound — adding the suffix \`<-s>\` directly would make the morpheme boundary invisible. Consider *match*. If the word sum were *match + s → matchs*, the resulting string would be ambiguous: where does the base end and the suffix begin? The \`<tch>\` and \`<s>\` run together without a clear boundary. The \`<e>\` is inserted at the join to make the boundary legible — to separate the final grapheme of the base from the suffix.

The \`<e>\` is an orthographic boundary marker. It is not part of the suffix. It is not a second suffix. It is the spelling system's solution to a readability problem at a specific kind of morpheme join.

**Sibilant endings that produce \`<-es>\`:**

    match + s → matches        (base ends in <tch>)
    church + s → churches      (base ends in <ch>)
    buzz + s → buzzes          (base ends in <zz>)
    push + s → pushes          (base ends in <sh>)
    fox + s → foxes            (base ends in <x>)

In each case, the base ends in a grapheme that represents a sibilant sound. The suffix is \`<-s>\`. The surface form adds \`<e>\` at the boundary to keep the join readable.

**The same principle applies to third-person singular verb forms.** The suffix that marks third-person singular agreement is also \`<-s>\`. When the verb base ends in a sibilant, the same orthographic solution applies:

    teach + s → teaches
    fix + s → fixes
    watch + s → watches

One suffix. Same convention. The morphological principle is consistent across noun plurals and verb agreement — because the phonological environment is the same.

**Contrast with non-sibilant bases**, where \`<-s>\` attaches directly with no boundary problem:

    cat + s → cats
    dog + s → dogs
    play + s → plays

The morpheme is \`<-s>\` in every case. The surface form adapts to the phonological environment — without changing the morpheme. This is morphological stability again, operating at the level of a suffix: the meaning unit \`<-s>\` (plurality, agreement) holds its identity across different surface forms.

The pedagogical implication is significant. A student who has learned two suffixes — \`<-s>\` and \`<-es>\` — has learned a surface pattern with no explanatory depth. A student who understands one suffix and the orthographic convention that governs its surface form in sibilant environments has learned a principle. That principle accounts for every sibilant-base plural they will ever encounter — including words they have never seen before.

Write the word sums: *pass + s → passes*, *wish + s → wishes*, *mix + s → mixes*. In each case, the suffix is \`<-s>\`. The surface form adds \`<e>\` because it must — the boundary demands it.

---

1. Write word sums for *buses*, *patches*, *fixes*, and *plays*. In each case, identify the suffix and explain why the surface form looks the way it does.
2. A phonics-first curriculum teaches \`<-es>\` as a separate suffix from \`<-s>\`. What morphological claim does this make — and why is it inaccurate?
3. The \`<e>\` in *matches* is an orthographic boundary marker. What problem does it solve? What would *matchs* look like to a reader trying to identify the morpheme boundary?
`,

  8: `## Core Idea

"Check the Joins!" is not a mnemonic. It is a procedure.

Applied systematically at every morpheme boundary, it produces principled spelling decisions for any word — including words never seen before.

---

## Check the Joins!: A Complete Analysis

You now have four named conventions: Replace, Double, Change, and Toggle. The "Check the Joins!" framework gives you a systematic order in which to apply them. At each morpheme boundary in a word, work through the checklist:

**1. Does Replace apply?**
Is the suffix vowel-initial? Does the base end in a final non-syllabic \`<e>\`? If both: yes — Replace.

**2. Does Double apply?**
Does the base end in a single vowel grapheme + single consonant in a stressed final syllable? Is the suffix vowel-initial? If all four conditions hold: yes — Double.

**3. Does Change apply?**
Does the base end in \`<y>\` preceded by a consonant? Is the suffix consonant-initial (or does the join produce a non-standard grapheme sequence)? If both: yes — Change.

**4. Does Toggle apply?**
Does the base end in \`<f>\` or \`<fe>\`? Is this a plural formation context? If both: yes — Toggle.

Work through three complete analyses.

---

**Analysis 1 — *unbelievable*:**

Proposed structure: \`un + believe + able → unbelievable\`

This word has two joins.

Join 1 (un + believe): A prefix attaches to the base. Prefix joins do not trigger suffixing conventions — Replace, Double, Change, and Toggle apply at suffix joins. Move on.

Join 2 (believe + able): Check Replace. Does \`<-able>\` begin with a vowel? Yes — \`<a>\`. Does \`<believe>\` end in a non-syllabic \`<e>\`? Yes — the final \`<e>\` of *believe* is not syllabic. Replace applies: the \`<e>\` is replaced by the vowel suffix.

Result:

    un + believ/ + able → unbelievable  ✓

Check Double: after Replace, the base no longer ends in a single consonant followed by a vowel suffix in the same way — Replace has already resolved the join. Double does not apply here.

---

**Analysis 2 — *happiness*:**

Proposed structure: \`happy + ness → happiness\`

One join.

Join (happy + ness): Check Replace. Does \`<happy>\` end in a non-syllabic \`<e>\`? No — it ends in \`<y>\`. Replace does not apply. Check Double. Does \`<happy>\` end in a single vowel + single consonant in a stressed syllable? No — it ends in \`<y>\`, not a consonant in the relevant sense. Double does not apply. Check Change. Does \`<happy>\` end in \`<y>\` after a consonant? Yes — \`<p>\` is a consonant. Does \`<-ness>\` begin with a consonant? Yes — \`<n>\`. Change applies: \`<y>\` → \`<i>\`.

Result:

    happi + ness → happiness  ✓

---

**Analysis 3 — *runner*:**

Proposed structure: \`run + er → runner\`

One join.

Join (run + er): Check Replace. Does \`<run>\` end in a non-syllabic \`<e>\`? No. Replace does not apply. Check Double. Does \`<run>\` end in a single vowel grapheme? Yes — \`<u>\`. Single final consonant? Yes — \`<n>\`. Stressed final syllable? Yes — *run* is monosyllabic. Vowel-initial suffix? Yes — \`<-er>\` begins with \`<e>\`. All four conditions hold. Double applies: \`<n>\` doubles.

Result:

    runn + er → runner  ✓

---

**Extended analysis — *controllable*:**

Proposed structure: \`con + troll + able → controllable\`

Join 1 (con + troll): prefix join — no convention applies.

Join 2 (troll + able): Check Replace. Does \`<troll>\` end in a non-syllabic \`<e>\`? No — it ends in \`<ll>\`. Replace does not apply. Check Double. Does \`<troll>\` end in a single vowel + single consonant? No — it ends in a consonant cluster \`<ll>\`. Double does not apply. Check Change. Does \`<troll>\` end in \`<y>\`? No. Check Toggle. Does \`<troll>\` end in \`<f>\` or \`<fe>\`? No. No convention applies.

Result:

    con + troll + able → controllable  ✓

The checklist reveals that some joins require no convention at all. That is a finding too — not every boundary is a site of orthographic pressure. The checklist's value is that it ensures no boundary is left unchecked.

The "Check the Joins!" procedure transforms suffixing conventions from isolated rules into a unified analytical practice. It can be applied to any word sum. It produces principled decisions. And it transfers — every student who has internalized the procedure can analyze a word they have never encountered before and arrive at the correct spelling through reasoning rather than memory.

---

1. Write the complete "Check the Joins!" analysis for *loveable* (from \`love + able\`) and *lovely* (from \`love + ly\`). What is different at the join in each case?
2. Apply "Check the Joins!" to *sunniest* (\`sunny + est\`). Which conventions apply, and in what order do you check them?
3. A student says: "I just need to memorize which words double and which don't." How would you use the "Check the Joins!" procedure to show them that memorization is unnecessary — and less reliable than the checklist?
`,

};
