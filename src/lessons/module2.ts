/**
 * Module 2 lesson bodies — full teaching prose for all 7 sections.
 * Topic: Units of the Writing System — Morphemes, Graphemes, and Phonemes.
 * Each section teaches; it does not summarize.
 */

export const module2Sections: Record<number, string> = {

  1: `## Core Idea

**The three units of linguistic analysis — morpheme, grapheme, and phoneme — are not interchangeable.**

**Confusing them produces inaccurate instruction, no matter how confident the teacher sounds.**

---

## Three Systems, One Confusion

Here is a sentence that sounds reasonable but contains a serious error:

> "The suffix \`<-ed>\` makes three different sounds, so students need to listen carefully to know which phoneme it uses."

The sentence treats a morpheme (\`<-ed>\`) as if it were a unit of sound. It imports the logic of phonological analysis — listening to phonemes — into what should be a morphological analysis: identifying a unit of meaning. The instruction that follows from this sentence will be inaccurate.

This module builds the analytical precision to prevent that error.

---

## The Three Units

Before the details, a preview:

- **Morpheme**: the smallest unit of *meaning* in a word. The unit of morphological analysis.
- **Grapheme**: a letter or letter team that represents a phoneme in a specific word. The unit of orthographic analysis.
- **Phoneme**: the smallest unit of *sound* that creates a meaning contrast. The unit of phonological analysis.

These three units describe three different systems. They interact — spelling connects graphemes to phonemes; morphemes constrain which graphemes appear — but they are not the same kind of thing, and they require different analytical questions.

---

## Where Conflation Happens in Classrooms

Three patterns of layer confusion appear routinely in literacy instruction. Each one produces a specific instructional error.

**Conflation 1 — Treating a letter as a grapheme.** A teacher says, "There are five letters in *night*, so there are five graphemes." But *night* contains three graphemes: \`<n>\`, \`<igh>\`, and \`<t>\`. The grapheme \`<igh>\` is a letter team — three letters representing a single phoneme. Counting letters and counting graphemes are different operations, and they produce different numbers for this word.

**Conflation 2 — Treating a syllable as a morpheme.** A teacher uses syllabication to "find the parts" of a word: *jump·ing*, *hap·py*, *sig·nal*. But syllables are phonological units — they detect sound boundaries, not meaning boundaries. The syllable division *sig·nal* severs the base \`<sign>\`. The morphological division is *sign + al*. Syllables and morphemes are not the same unit, and they do not always align.

**Conflation 3 — Treating a morpheme as a sound unit.** This is the error in the opening example: analyzing \`<-ed>\` by asking what sound it makes. The morpheme \`<-ed>\` is a unit of meaning — past tense, completed action — and it holds its spelling across three phonological environments (/t/, /d/, /ɪd/). Asking what sound it makes conflates the morphological question (what does it mean?) with the phonological question (how is it pronounced?). These require different answers.

---

## The Cost of Each Confusion

Each conflation has an instructional cost.

When a teacher treats letters as graphemes, students learn to count letters when they need to count meaning-units — and they will consistently misanalyze words like *ship*, *night*, and *catch*.

When a teacher treats syllables as morphemes, students learn to divide words in ways that destroy the visual identity of the base — and lose the connections between related words that make vocabulary learning powerful.

When a teacher treats a morpheme as a sound unit, students are sent to listen for something that is not there to hear — and they get no principled explanation for why the same suffix is spelled the same way regardless of its pronunciation.

This module builds the precise definitions and the investigative habits that prevent these errors. The goal is not to memorize three terms. The goal is to analyze at the right level — and to know, in the moment of instruction, which level a question belongs to.

---

## Reflection

Before continuing, write your answers:

1. A teacher says: "The grapheme \`<-ed>\` has three pronunciations." Identify the layer error in this sentence. What is \`<-ed>\`, and what has three pronunciations?
2. Syllabication and morphological analysis both produce "parts" of a word. What is the key difference between what each system is detecting?
3. Why does it matter, in practice, whether a teacher analyzes *night* as having five graphemes or three? What instructional difference would follow from each count?
`,

  2: `## Core Idea

**A morpheme is the smallest meaningful element in a word — and meaning, not sound, is the criterion.**

**One morpheme can have multiple pronunciations. That is not an irregularity. It is how morphemes work.**

---

## The Definition and Its Diagnostic Question

A morpheme is the smallest element of a word that carries stable meaning.

"Smallest" means it cannot be divided into smaller meaningful parts. "Stable meaning" means the same meaning recurs across every word where the element appears.

The diagnostic question for any candidate morpheme is: *Does this element carry the same meaning in every word where it appears?*

If yes: it is a morpheme, and the meaning it carries is part of its definition.
If no: the element is either not a morpheme, or you are grouping together elements that are distinct.

---

## Test Case: \`<-ed>\`

Return to the example from Module 1. The suffix \`<-ed>\` appears in *jumped*, *jogged*, and *landed*.

Write the word sums:

    jump + ed → jumped
    jog + ed → jogged
    land + ed → landed

Now apply the diagnostic question: does \`<-ed>\` carry the same meaning in all three words?

Yes. In each case, \`<-ed>\` signals past time or completed action. The meaning is identical across all three words. The spelling is identical. The morpheme is one.

The pronunciations differ: /t/ in *jumped*, /d/ in *jogged*, /ɪd/ in *landed*. But pronunciation is not the criterion. Meaning is. Three phonological realizations, one morpheme.

This is why a student who writes *jumpt* has made a morphological error but a phonological observation. They heard /t/ and wrote /t/. The instruction they need is not "listen harder" — it is: "the suffix \`<-ed>\` is a morpheme. It holds its spelling because it holds its meaning."

---

## Test Case: \`<un->\`

The prefix \`<un->\` is a strong candidate for morpheme status. Let's test it.

Examine these words:

- *unhappy* — \`<un->\` means "not"
- *unfair* — \`<un->\` means "not"
- *unlock* — \`<un->\` means "reverse the action"

The meaning is consistent: negation or reversal. Apply the diagnostic question: does \`<un->\` carry a stable meaning across all these words? Yes. \`<un->\` is a morpheme.

Now test it on a word where the letters *un* also appear: *uncle*.

Write the word sum: can you write *uncle* as \`<un->\` + something?

No. *Uncle* is a single free morpheme. There is no base \`<cle>\` that means anything. The letters *un* in *uncle* do not constitute the prefix \`<un->\` — they are simply the first two letters of a single morpheme. Sequence of letters does not equal morpheme. Meaning is the test.

This is a critical habit: the presence of a familiar letter string does not guarantee the presence of a familiar morpheme. You must always apply the diagnostic question.

---

## Free Bases and Bound Bases: A Preview

Morphemes come in two broad types: those that can stand alone as words, and those that cannot.

A **free morpheme** can stand alone: \`<jump>\`, \`<play>\`, \`<sign>\`, \`<hope>\`. Each of these is a usable English word as-is.

A **bound morpheme** must attach to something else: \`<-ed>\`, \`<un->\`, \`<-ion>\`, \`<re->\`. None of these is a complete word. But each carries determinate meaning.

Among bound morphemes, a critical subtype is the **bound base**: a base that carries a core meaning but cannot stand alone as a word. The base \`<struct>\` means "build or arrange" — you can see it in *construct*, *destruct*, *instruct*, *structure* — but *struct* alone is not an English word. Module 5 explores bound bases in depth. For now, note that "can it stand alone?" and "does it carry meaning?" are two separate questions.

---

## The Morpheme as the Unit of Instruction

Here is why morpheme analysis matters at the instructional level.

A teacher who has identified the morpheme \`<-ed>\` correctly can teach this principle to students: *the suffix \`<-ed>\` always signals past time or completed action, and it is always spelled the same way.* The principle holds. It transfers. Students can apply it to every past-tense form they encounter.

A teacher who has confused the morpheme with a sound unit will teach students to "listen for the sound" — which fails as soon as they encounter *jumped* and *jogged* in the same paragraph.

The morpheme is stable. Instruction built on morphemes is stable. That stability is what makes morphological analysis the foundation of the meaning-first approach.

---

## Reflection

Before continuing, write your answers:

1. Apply the diagnostic question to the string \`<-er>\` in these words: *teacher*, *runner*, *faster*, *water*. Is \`<-er>\` a single morpheme in all four words? If not, what is different about the cases where it isn't?
2. Why doesn't the string *un* in *uncle* constitute the prefix \`<un->\`? What test would you use to determine whether a letter string is a morpheme?
3. A student says: "But \`<-ed>\` sounds different in different words — how can it be the same morpheme?" Write the response you would give, using the distinction between the morphological criterion and the phonological criterion.
`,

  3: `## Core Idea

**A grapheme is a letter or letter team that represents a phoneme in a specific word.**

**The word "team" is not decorative — many graphemes are multi-letter units, and counting letters is not the same as counting graphemes.**

---

## The Definition and Its Consequence

A grapheme represents one phoneme. It may be one letter, or it may be a team of letters acting together to represent that phoneme. The key phrase in the definition is "in a specific word" — grapheme identity depends on context. The letters \`<th>\` in *the* function as a single grapheme representing /ð/. The letters \`<t>\` and \`<h>\` in *anthill* are two separate graphemes representing two separate phonemes, /t/ and /h/, because the word boundary falls between the morphemes \`<ant>\` and \`<hill>\`.

Context determines whether letters form a team. This is why grapheme analysis cannot be done by looking at letter strings in isolation — it requires analyzing the specific word.

---

## Investigation: \`<night>\`

Count the letters in *night*: n-i-g-h-t. Five letters.

Now count the graphemes.

Ask: what phonemes does this word contain?

- The initial consonant /n/
- The vowel /aɪ/
- The final consonant /t/

Three phonemes. So there are three graphemes.

Now identify them:

- \`<n>\` → /n/
- \`<igh>\` → /aɪ/
- \`<t>\` → /t/

Five letters, three graphemes. The letter team \`<igh>\` is a single grapheme — three letters representing one phoneme. Counting letters and counting graphemes produces different results because \`<igh>\` is not three graphemes.

---

## Investigation: \`<ship>\`

Count the letters: s-h-i-p. Four letters.

Identify the phonemes: /ʃ/, /ɪ/, /p/. Three phonemes.

Identify the graphemes:

- \`<sh>\` → /ʃ/
- \`<i>\` → /ɪ/
- \`<p>\` → /p/

Four letters, three graphemes. The letter team \`<sh>\` functions as a single grapheme.

---

## Investigation: \`<catch>\`

Count the letters: c-a-t-c-h. Five letters.

Identify the phonemes: /k/, /æ/, /tʃ/. Three phonemes.

Identify the graphemes:

- \`<c>\` → /k/
- \`<a>\` → /æ/
- \`<tch>\` → /tʃ/

Five letters, three graphemes. The letter team \`<tch>\` represents the affricate /tʃ/ as a single grapheme.

---

## Investigation: \`<phone>\`

Count the letters: p-h-o-n-e. Five letters.

Identify the phonemes: /f/, /oʊ/, /n/, and then consider \`<e>\`. Four phonemes — but what about that final \`<e>\`?

The final \`<e>\` in *phone* is a non-syllabic \`<e>\`. It is not pronounced as its own vowel phoneme — but it is doing orthographic work: it marks the preceding vowel grapheme as long, and it signals that the \`<ph>\` spelling is appropriate for a word of Greek origin. It is one grapheme representing a functional role, not a separate vowel sound.

Identify the graphemes:

- \`<ph>\` → /f/
- \`<o>\` → /oʊ/
- \`<n>\` → /n/
- \`<e>\` → (non-syllabic marker)

Five letters, four graphemes. The letter team \`<ph>\` is one grapheme.

---

## The Analytical Consequence

Here is what happens when you treat letters and graphemes as equivalent.

If a teacher analyzes *phone* and says "there are five letters, so there are five graphemes representing five sounds," the count is wrong on both ends: there are four graphemes, and the word contains three syllabic phonemes plus a non-syllabic marker. The error is not minor — it will produce wrong instruction about how to read and spell words with \`<ph>\`.

More importantly, the student who treats \`<ph>\` as two graphemes has no way to explain why these two letters consistently represent /f/ together. The teacher who understands \`<ph>\` as a single grapheme (a digraph of Greek origin) can explain: this letter team was established in English spelling to mark words borrowed from Greek, where the original spelling used the letter phi. The grapheme is a team; it behaves as a unit; it has a history.

Grapheme analysis is not a counting exercise. It is an identification of the functional units that connect spelling to sound — and that identification requires attending to letter teams, not just individual letters.

---

## A Working Table

Here is a summary of the four words investigated above:

| Word | Letters | Graphemes | Grapheme breakdown |
|------|---------|-----------|-------------------|
| *night* | 5 | 3 | \`<n>\`, \`<igh>\`, \`<t>\` |
| *ship* | 4 | 3 | \`<sh>\`, \`<i>\`, \`<p>\` |
| *catch* | 5 | 3 | \`<c>\`, \`<a>\`, \`<tch>\` |
| *phone* | 5 | 4 | \`<ph>\`, \`<o>\`, \`<n>\`, \`<e>\` |

In every case, the grapheme count is lower than or equal to the letter count. It is never higher — because graphemes may group multiple letters, but a single letter is never split across graphemes.

---

## Reflection

Before continuing, write your answers:

1. A teacher says *shape* has five graphemes because it has five letters. Identify the error. How many graphemes does *shape* actually have, and what are they?
2. Why does grapheme identity depend on the specific word being analyzed? Give an example of a letter string that functions as one grapheme in one word and as two separate graphemes in another.
3. Why is it instructionally important to distinguish between a digraph (a two-letter grapheme like \`<sh>\`) and two separate graphemes? What would a student misunderstand about *ship* if they treated \`<sh>\` as two graphemes?
`,

  4: `## Core Idea

**A phoneme is the smallest unit of sound that creates a meaning contrast — it is identified by contrast, not by acoustic measurement.**

**Phonemes are mental categories, not physical sounds. This distinction has direct consequences for literacy instruction.**

---

## The Definition and the Minimal Pair Test

A phoneme is identified by its capacity to distinguish meaning. If swapping one sound for another produces a different word (or a non-word where a word was), those two sounds are different phonemes in that language.

This is the minimal pair test: two words that differ by exactly one sound are a minimal pair. If the meaning changes, the differing sounds are different phonemes.

Examples:

- *bat* / *pat* — differ by one sound, different meaning → /b/ and /p/ are different phonemes
- *cat* / *hat* — differ by one sound, different meaning → /k/ and /h/ are different phonemes
- *pin* / *bin* — differ by one sound, different meaning → /p/ and /b/ are different phonemes

The notation convention matters: phonemes are written between slashes: /b/, /p/, /t/. Graphemes are written between angle brackets: \`<b>\`, \`<p>\`, \`<t>\`. Using the right notation signals which layer you are analyzing.

---

## Phonemes Are Abstractions

Here is the crucial insight that most phonics-first instruction never reaches: phonemes are not physical sounds. They are categories.

Consider the phoneme /t/. It appears in *top* and *stop*. Say both words aloud and pay attention to the initial and internal consonant.

In *top*, the /t/ is aspirated — there is a small puff of air. If you hold a thin piece of paper in front of your mouth and say *top*, the paper moves.

In *stop*, the /t/ is unaspirated — the puff of air is absent. The paper barely moves.

Acoustically, these are two different sounds. But English speakers hear them as the same sound — /t/ — because swapping them does not change the meaning of any English word. They are the same phoneme in English, realized differently in different phonological environments.

The technical term for these variants is **allophones**: different physical realizations of the same phoneme.

---

## Why This Matters for Instruction

A teacher who believes phonemes are simply "the sounds letters make" will be unprepared when students report hearing the same word differently.

A student from a dialect where the vowels in *pin* and *pen* are merged (common in many American Southern dialects) is reporting a real phonological fact: in their internalized phonological system, those two vowels are not contrastive. They are the same phoneme. The student is not mishearing. They are hearing accurately within their own phonological grammar.

The phonological instruction that treats one pronunciation as "correct" and the other as a "mistake" is treating the abstraction (the phoneme as a mental category) as if it were a fixed acoustic signal — and it privileges one dialect's phonological system over another.

This is why: **phonological analysis is not the arbiter of spelling.**

English spelling was standardized at a moment in history when specific dialectal pronunciations were treated as authoritative. But spelling now serves speakers of many dialects, many of whom have different phonological systems. The student from the pin/pen merger dialect who spells both words correctly is not using sound to spell — they cannot, because the sounds merge in their dialect. They are using morphological and orthographic knowledge.

---

## The Schwa Problem

The clearest practical example of why phonological analysis cannot anchor spelling is the schwa.

The schwa /ə/ is the most common vowel sound in English — the unstressed, reduced vowel that appears in the second syllable of *sofa*, the first syllable of *about*, and the final syllable of *pencil*.

Because it is unstressed, it can represent almost any vowel grapheme: \`<a>\` in *sofa*, \`<o>\` in *lemon*, \`<e>\` in *pencil*, \`<i>\` in *fossil*, \`<u>\` in *circus*.

A student who tries to spell from the schwa will consistently misspell words with unstressed vowels. They cannot determine from the sound which grapheme to use — because the phoneme /ə/ is compatible with many graphemes.

The solution is morphological: find a related word where the vowel is stressed. The schwa in *photograph* (/ˈfoʊtəˌgræf/) corresponds to the stressed vowel /æ/ in *photography* (/fəˈtɒgrəfi/). Knowing that both words share the base \`<graph>\` tells you the grapheme is \`<a>\`. The morpheme guides the spelling; the phoneme cannot.

---

## Summary: Three Notations, Three Layers

| Layer | Unit | Notation | Example |
|-------|------|----------|---------|
| Morphology | morpheme | angle brackets | \`<jump>\`, \`<-ed>\` |
| Orthography | grapheme | angle brackets | \`<sh>\`, \`<igh>\` |
| Phonology | phoneme | slashes | /ʃ/, /aɪ/ |

These notations are not decorative. Using the right notation forces the right analytical question. When you write /t/, you are committing to a phonological claim. When you write \`<t>\`, you are committing to an orthographic claim. When you write \`<jump>\`, you are committing to a morphological claim.

Precision in notation builds precision in analysis.

---

## Reflection

Before continuing, write your answers:

1. What is the minimal pair test, and what does it determine? Use *bat* and *bad* to illustrate.
2. The /t/ in *top* and the /t/ in *stop* are acoustically different but phonologically the same. What does this tell you about the nature of phonemes?
3. Why can't a student rely on phonological analysis alone to spell a word with an unstressed vowel (a schwa)? What should they use instead?
`,

  5: `## Core Idea

**Free bases can stand alone as words. Bound bases cannot — but they carry determinate meanings and unlock entire families of academic vocabulary.**

**Understanding bound bases gives students access to words they have never encountered before.**

---

## Free Bases: The Familiar Starting Point

A free base is a morpheme that functions as a complete word on its own. Students encounter free bases from their earliest reading:

- \`<jump>\` — a word and a base: *jump*, *jumping*, *jumped*, *jumper*
- \`<play>\` — a word and a base: *play*, *playing*, *replay*, *playground*
- \`<sign>\` — a word and a base: *sign*, *signing*, *signal*, *signature*
- \`<just>\` — a word and a base: *just*, *justify*, *unjust*, *justice*

Notice that each of these is both a standalone word and the stable core that persists across an entire word family. The free base gives students an anchor — something they already know — from which to read and spell related words.

---

## Bound Bases: Where Academic Vocabulary Lives

A bound base is a morpheme that carries a clear, specific meaning — but cannot stand alone as an English word. It always appears with at least one prefix or suffix.

Most bound bases come from Latin or Greek. This is significant: Latin and Greek roots are the source of a large proportion of academic, technical, and disciplinary vocabulary in English. A student who knows a bound base has access to a whole cluster of academic words at once.

---

## Investigation: \`<struct>\`

The bound base \`<struct>\` carries the meaning *build* or *arrange*.

Test the diagnostic question: does \`<struct>\` mean "build/arrange" in every word where it appears?

Write the word sums:

    con + struct → construct
    de + struct + ion → destruction
    in + struct + ion → instruction
    struct + ure → structure
    re + struct + ure → restructure
    in + fra + struct + ure → infrastructure

In every case: building, arranging, making something. *Construct* = build together. *Destruction* = the undoing of what was built. *Instruction* = building understanding into someone. *Structure* = the thing built. *Infrastructure* = the foundational structure built beneath other systems.

The base \`<struct>\` never appears alone as an English word. But its meaning is determinate — it holds across all its appearances. A student who knows \`<struct>\` means "build" can read *infrastructure* and *restructure* on sight. Without that knowledge, those words are just long and intimidating.

---

## Investigation: \`<rupt>\`

The bound base \`<rupt>\` carries the meaning *break*.

Write the word sums:

    e + rupt → erupt
    in + ter + rupt → interrupt
    cor + rupt → corrupt
    dis + rupt → disrupt
    a + brupt → abrupt

Apply the diagnostic question: does \`<rupt>\` mean "break" in each case?

*Erupt*: break out. *Interrupt*: break between, break into. *Corrupt*: thoroughly broken. *Disrupt*: break apart. *Abrupt*: broken off suddenly.

Yes — the meaning holds across all cases. \`<rupt>\` is a morpheme. It is bound — it never stands alone — but it is real, stable, and powerful.

---

## Investigation: \`<dict>\`

The bound base \`<dict>\` carries the meaning *say* or *declare*.

Write the word sums:

    pre + dict → predict
    contra + dict → contradict
    ver + dict → verdict
    dict + ate → dictate
    dict + ion + ary → dictionary
    in + dict + ment → indictment

*Predict*: declare before. *Contradict*: declare against. *Verdict*: the true saying (from Latin *vere* = truly, *dictum* = said). *Dictate*: to declare with authority. *Dictionary*: the collection of words declared and defined.

The meaning holds. The base is real. The word family is large.

---

## The Verification Test and Its Value

Each of these investigations runs the same verification: does the base mean the same thing in every member of the family? If yes, the analysis is sound. If you find a word where the meaning doesn't hold, you have either mis-identified a member of the family, or you have a genuine analytical puzzle worth investigating.

This is not a test students merely observe — it is a test they can perform.

A student who knows \`<struct>\` = build can encounter *obstruct* for the first time and ask: "What is being built against what?" (*ob-* means "against/in the way of": build in the way = block.) They can encounter *construe* and ask: "How does this relate to construct?" (From the same Latin root, via different French paths.) The verification test is the beginning of genuine word investigation, not the end of it.

---

## Why Bound Bases Matter Most

Free bases unlock common, everyday vocabulary. Bound bases unlock academic, technical, and disciplinary vocabulary — the kind that creates the achievement gap between students who read fluently across content areas and those who don't.

A student who knows \`<struct>\` can read *infrastructure* in a social studies text, *restructure* in an economics article, *obstruction* in a legal document. A student who doesn't know the base must decode each word individually, slowly, with no transfer between them.

Morphological awareness — especially awareness of bound bases — is one of the highest-leverage investments in vocabulary instruction. Each base learned is not one word learned; it is a family of words made accessible.

---

## Reflection

Before continuing, write your answers:

1. What is the difference between a free base and a bound base? Give one example of each.
2. Test the bound base \`<port>\` (meaning "carry") against these words: *transport*, *import*, *export*, *portable*, *report*. Does the meaning hold across all five? What does each word sum reveal about what is being carried?
3. Why do bound bases — especially Latin and Greek roots — disproportionately matter for academic vocabulary? What is the instructional implication?
`,

  6: `## Core Idea

**The word sum is a claim about morphological structure — not a description of how a word sounds.**

**Reading and writing word sums is the core analytical skill of Structured Word Inquiry.**

---

## Anatomy of a Word Sum

A word sum has three components:

1. **Morphemes**: written in the order they appear in the word, separated by plus signs
2. **The plus sign**: marks a morpheme boundary
3. **The arrow**: represents the relationship between structure and word (including any join conventions that apply)

The simplest word sums have one base and one affix:

    re + play → replay
    play + ing → playing
    jump + ed → jumped

Read aloud as: "re plus play makes replay." "Play plus ing makes playing." The language of "makes" is important — it keeps the arrow as a structural claim (here is what the morphemes produce together) rather than a definition (here is what this word means).

---

## The Plus Sign as a Morpheme Boundary

The plus sign in a word sum marks where one morpheme ends and the next begins. It is not a syllable boundary. It is not an arbitrary division. It is a claim about structure.

This matters because morpheme boundaries and syllable boundaries do not always coincide. Compare:

    jump + ing → jumping       (morpheme boundary: between base and suffix)
    jum · ping                 (syllable boundary: between /m/ and /p/)

The morpheme boundary is *after* \`<jump>\`. The syllable boundary is *inside* \`<jump>\`. The word sum shows you the morpheme boundary; the syllabication shows you the syllable boundary. These are different claims about different systems. The word sum is the morphological claim.

---

## Building Multi-Element Word Sums

Once students are comfortable with two-element word sums, they can build longer ones. These follow the same conventions — morphemes left to right, plus signs at boundaries, arrow to the word:

    un + help + ful → unhelpful
    re + construct + ion → reconstruction
    in + struct + or → instructor
    un + predict + able → unpredictable

Read each aloud: "un plus help plus ful makes unhelpful." "Re plus construct plus ion makes reconstruction."

Notice what multi-element word sums reveal: the architecture of complex words. A student who writes *re + construct + ion → reconstruction* knows:
- \`<re->\`: again
- \`<construct>\`: build
- \`<-ion>\`: the action or result of

They can read "reconstruction" and know: the act of building again. That is not a definition they looked up — it is a meaning they constructed from morphological analysis. The word sum is the tool that made it visible.

---

## The Arrow and Join Conventions

The arrow represents more than "equals." It represents the relationship between structure and word — including any changes that occur at morpheme boundaries.

Some word sums have no join change: the morphemes combine without any alteration.

    jump + ed → jumped          (no change)
    play + ing → playing        (no change)
    re + play → replay          (no change)

Some word sums involve a join convention. The three main join conventions in English (which Module 3 explores in depth) are:

- **Doubling**: the final consonant of the base is doubled before a vowel-initial suffix: *run + n + ing → running*
- **Replacing**: the final non-syllabic \`<e>\` of the base is replaced by a vowel-initial suffix: *make/ + ing → making* (the slash marks the replaced \`<e>\`)
- **Changing**: the final \`<y>\` of the base changes to \`<i>\` before most suffixes: *happy/ + ness → happiness*

Even when join conventions apply, the word sum preserves the morphemes. The base is still visible in the analysis. The suffix is still identifiable. The join convention explains the boundary — it does not hide the morphemes.

---

## The Word Sum as a Testable Claim

This is the most important thing to say about word sums: they are claims, not facts handed down from authority.

A word sum proposes that these morphemes combine to produce this word. That proposal can be tested:

- Does the base carry a stable meaning across related words?
- Is the prefix or suffix a real affix with a knowable meaning?
- Does the join produce the correct spelling?
- Do related words confirm the analysis?

If any of these tests fails, the word sum needs revision.

This is what makes word sums an investigative tool rather than a memorization tool. A student who writes:

    act + ion → action

can test this: Is \`<act>\` a real base? Yes — *act*, *acting*, *actor*, *enact*. Is \`<-ion>\` a real suffix? Yes — *construct + ion*, *predict + ion*, *attract + ion*. Does the sum produce the correct word? Yes. The claim holds.

A student who writes:

    a + ction → action

has proposed that \`<a->\` is a prefix and \`<ction>\` is something — but neither of those elements holds up to the diagnostic question. The sum fails the test. That failure is useful: it points the student toward a better analysis.

---

## Writing Word Sums in the Classroom

When you introduce word sums, model the full process:

1. Identify the base: "What is the simplest form of this word?"
2. Identify the affixes: "What has been added before or after the base?"
3. Write the sum: "Write the morphemes with plus signs between them."
4. Write the word: "Draw the arrow. Write the word this structure produces. Check the join."
5. Test: "Does the base mean the same thing in a related word?"

The first time students write word sums, they will want to treat the plus sign as a syllable boundary or a hyphen. Correct this gently: "The plus sign marks where one morpheme ends and the next begins. Let's check: is this a morpheme boundary, or is it a sound boundary?"

Over time, word sums become fluent — students reach for them automatically when analyzing an unfamiliar word. That automaticity is the goal.

---

## Reflection

Before continuing, write your answers:

1. Write word sums for *unhelpful*, *reconstruction*, and *unpredictable*. For each, identify the prefix(es), base, and suffix(es).
2. What is the difference between a morpheme boundary (marked by \`+\` in a word sum) and a syllable boundary (marked by a division point in syllabication)?
3. A student writes *re + ad + ing → reading*, treating \`<ad>\` as a prefix and \`<re>\` as a prefix. What test would you use to evaluate this word sum? What would the test reveal?
`,

  7: `## Core Idea

**Layer confusion in instruction is not a vocabulary problem — it is a structural problem that produces specific, predictable instructional errors.**

**Each case of conflation has a precise correction, and knowing the correction is part of what it means to teach at this level.**

---

## Why Case Studies Matter

Definitional knowledge — knowing what a morpheme, grapheme, and phoneme each are — is necessary but not sufficient. The test of this knowledge is what a teacher does in the moment of instruction, when a student asks a question or makes an error that requires an immediate response.

The three case studies in this section present situations where layer confusion is embedded in the teacher's language. Each case identifies the exact error, explains the analytical consequence, and models the correction. Study each case as a precision instrument: the goal is to be able to identify the layer confusion on contact and redirect to the right level.

---

## Case Study 1 — Grapheme-Letter Collapse

**The situation**: A teacher is introducing the digraph \`<ph>\` and says:

> "\`<ph>\` is two letters that make one sound."

**What is wrong with this framing?**

The teacher is counting letters (\`<p>\` and \`<h>\`) and noting that they produce one sound. This is accurate as far as it goes — but the framing treats the letter as the unit of analysis and then notices a departure from the one-letter-one-sound assumption. This produces the phrase "two letters that make one sound," which implies that the normal case is one letter / one sound, and \`<ph>\` is an exception to that norm.

But the unit of orthographic analysis is the grapheme, not the letter. \`<ph>\` is *one grapheme* — a digraph — that represents the phoneme /f/. It is not an exception to anything. It is a regular instance of a multi-letter grapheme.

The framing "two letters, one sound" keeps the letter as the analytical unit and marks the grapheme as an anomaly. The framing "one grapheme, one phoneme" names the correct analytical unit and shows that \`<ph>\` follows the normal pattern: one grapheme represents one phoneme.

**What to say instead**:

> "The grapheme \`<ph>\` represents the phoneme /f/ in this word. \`<ph>\` is a letter team — a digraph — that always works together as a single unit."

Follow up: "What other words do you know with the grapheme \`<ph>\`?" (*phone*, *photo*, *alphabet*, *phonics*, *graph*, *elephant*.) Notice that the grapheme is consistent — it always represents /f/ in words of Greek origin.

**The analytical precision gained**: Students learn that graphemes may be multi-letter units. They stop counting letters and start identifying graphemes. They are prepared to analyze other digraphs (\`<sh>\`, \`<ch>\`, \`<igh>\`, \`<tch>\`) without the frame of "exception."

---

## Case Study 2 — Morpheme-Syllable Collapse

**The situation**: A teacher uses syllabication as the primary tool for "breaking words into parts" and teaches students that *jumping* has two syllables — *jum* and *ping* — as a way of revealing word structure.

**What is wrong with this framing?**

Syllabication detects phonological boundaries — the points where spoken syllables break. It is a tool for pronunciation, not for spelling or meaning. When syllabication is used to reveal "word parts," the implication is that syllables are the relevant unit of analysis for understanding how words are built.

But the relevant unit for understanding how words are built is the morpheme. And in *jumping*, the morpheme boundary is not where the syllable boundary falls:

- Syllable boundary: *jum | ping* (between /m/ and /p/)
- Morpheme boundary: *jump | ing* (between the base \`<jump>\` and the suffix \`<-ing>\`)

The syllabication cuts through the middle of the base \`<jump>\`. A student who is taught to break *jumping* as *jum-ping* may fail to see the word *jump* inside *jumping* — which is the most important structural fact about that word for both spelling and vocabulary.

**What to say instead**:

> "The base is \`<jump>\`. The suffix is \`<-ing>\`. The morpheme boundary falls between the base and the suffix. Write the word sum: *jump + ing → jumping*. Can you see the base *jump* inside the word *jumping*?"

Note what this response does: it identifies the morpheme boundary (not the syllable boundary), names the morpheme types (base and suffix), and uses a word sum to make the structure visible.

**The analytical precision gained**: Students learn that morpheme boundaries and syllable boundaries are different things. They stop breaking words at sound boundaries and start identifying the meaningful units first. Spelling from word sums becomes possible because the base is always visible.

---

## Case Study 3 — Morpheme-Phoneme Collapse

**The situation**: A teacher is teaching past tense and says:

> "The suffix \`<-ed>\` sounds different in different words, so you need to listen carefully to figure out how to pronounce it."

**What is wrong with this framing?**

The teacher is treating a morpheme as if it were a sound unit — as if the correct analysis of \`<-ed>\` is phonological. The instruction "listen carefully" directs students to use phonological analysis to determine something about a morpheme. But morphemes are not phonological units; they are meaning units. The question "how is \`<-ed>\` pronounced?" is the wrong question to ask about a morpheme.

The correct morphological statement is: **the suffix \`<-ed>\` is one morpheme with one spelling, whose phonological realization varies across environments.** In *jumped*, the phonological environment after the base (a voiceless consonant /p/) conditions the realization /t/. In *jogged*, the environment (a voiced consonant /g/) conditions the realization /d/. In *landed*, the environment (an alveolar stop /d/) conditions the realization /ɪd/ to avoid consonant cluster difficulty.

The morpheme is one. The phonological environments vary. The spelling is stable because it encodes the morpheme, not the phoneme.

**What to say instead**:

> "The suffix \`<-ed>\` is always spelled the same way. It always signals past time or completed action — that is its morphological meaning, and it is stable. Its pronunciation varies depending on the final sound of the base, but we don't need to listen for that to spell it. Write the word sum: *jump + ed → jumped*. The suffix is \`<-ed>\`. The spelling does not change."

**The analytical precision gained**: Students stop listening for the phoneme of \`<-ed>\` and start analyzing it as a morpheme with stable meaning and spelling. The three pronunciations become a phonological observation (interesting, but not relevant to spelling) rather than a spelling puzzle (distressing, and the source of *jumpt*, *stopt*, and *washt*).

---

## Bringing the Three Cases Together

Each case study follows the same structure:

1. A teacher says something that sounds reasonable
2. The statement conflates two different analytical layers
3. The conflation produces an inaccurate analysis
4. The inaccurate analysis produces instruction that misleads students
5. The correction names the right layer, the right unit, and the right question

The precision this module builds is not about terminology for its own sake. It is about knowing, in the middle of instruction, which layer you are working on — and being able to redirect yourself and your students to the right one.

A teacher who can say "That is a phonological observation. Let's look at the morphological layer" is a different kind of teacher than one who uses "sound," "letter," and "morpheme" interchangeably. The first teacher opens accurate investigation. The second teacher closes it, often without realizing it.

---

## Reflection

Before continuing, write your answers:

1. In Case Study 1, why is the phrase "two letters making one sound" analytically weaker than "one grapheme representing one phoneme"? What unit does each phrase treat as primary, and what are the consequences?
2. In Case Study 2, what is the difference between what syllabication reveals and what a word sum reveals when applied to *jumping*? Why does that difference matter for a student who is learning to spell?
3. In Case Study 3, a teacher says \`<-ed>\` "sounds different." Write a precise correction in your own voice — one that names the right layer, the right unit, and the right analytical question.
`,

};
