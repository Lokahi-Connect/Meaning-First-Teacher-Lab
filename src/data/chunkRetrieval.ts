// In-lesson retrieval: where to split each section's markdown into chunks.
// splitAt = exact text that STARTS the next chunk (the split happens before this string).
// The retrieval prompt appears between chunks — after the student reads chunk N, before chunk N+1.

export interface RetrievalSplit {
  splitAt: string;
  question: string;
  answer: string;
}

export const chunkRetrieval: Record<number, Record<number, RetrievalSplit[]>> = {
  1: {
    1: [
      {
        splitAt: "## A Note on the Join",
        question: "Before reading further: the suffix <-ed> is spelled the same in jumped, jogged, and landed even though it sounds different in each. What principle does this constancy illustrate?",
        answer: "Morphological stability: English spelling preserves the identity of the morpheme (meaning unit) across different phonological environments. The writing system is organized around meaning units, not sound units. The suffix <-ed> is always the same meaning unit, so it is always spelled the same way.",
      },
    ],
    2: [
      {
        splitAt: "## What \"Irregular\" Really Means",
        question: "You've read the investigations of 'sign/signal' and 'knowledge/know.' In each case, what single piece of evidence resolves the apparent anomaly?",
        answer: "The word family. 'Signal' reveals that the <g> in 'sign' is phonologically active elsewhere in the family — it marks the base <sign>. 'Know' reveals that the <kn-> of 'knowledge' is shared across the family (know, known, knowing). The word family transforms apparent irregularity into principled base-marking.",
      },
    ],
    3: [
      {
        splitAt: "## What the False Analysis Costs",
        question: "A teacher says <-tion> is a grapheme that represents /ʃən/. You've just read the investigation of 'action' and 'tension.' Name the two analytical errors in the teacher's claim.",
        answer: "First: <-tion> is not a grapheme — it is a suffix (a morpheme). Second: it collapses the morphological layer with the phonological layer. The correct analysis separates them: the suffix is <-ion>; the base ends in <t> (act) or a palatalized consonant (tens-); the /ʃ/ sound is a phonological outcome, not a grapheme-to-phoneme rule for a single unit.",
      },
    ],
    4: [
      {
        splitAt: "## Investigate: Three Words, Two Analyses",
        question: "You've read why syllabication cannot detect morpheme boundaries. What specific relationship does syllabic division of 'happiness' as hap-pi-ness hide?",
        answer: "The connection to 'happy.' The morpheme boundary is happy + -ness (with a <y>→<i> change at the join). Syllabic division cuts through the base, hiding the entire word family: unhappy, happily, happier, happiest. A student taught only syllabication cannot see that 'happiness' is built from 'happy' or apply the same logic to related words.",
      },
    ],
    5: [
      {
        splitAt: "## The Investigative Shift",
        question: "You've read the three-layer model. Without looking back: name the three layers and the unit of analysis that belongs to each.",
        answer: "Morphological layer → morpheme (prefix, base, suffix — units of meaning). Orthographic layer → grapheme (written letter or letter group that represents a phoneme). Phonological layer → phoneme (unit of sound that distinguishes meaning). Mixing these units — calling a morpheme a grapheme, or a grapheme a phoneme — produces errors that block investigation.",
      },
    ],
    6: [
      {
        splitAt: "## Why the Research Matters",
        question: "Bowers & Kirby (2010) is cited as the foundation for the claim that morphological instruction benefits all students. Which finding from their meta-analysis is most relevant to teaching students with reading difficulties?",
        answer: "Students with the weakest literacy foundations showed the greatest gains from morphological instruction. This is the opposite of what many teachers expect (that this approach is 'advanced'). It suggests that struggling readers' difficulties are partly a product of being given a framework — phonics-only — that cannot explain the system they are trying to learn.",
      },
    ],
    7: [
      {
        splitAt: "## What These Responses Have in Common",
        question: "You've read five classroom situations. In Situations 1–5, all five meaning-first responses redirect the student in the same direction. What direction?",
        answer: "From phonological analysis ('what sound does it make?') toward morphological investigation: What does this word mean? What family does it belong to? What base is preserved here? Every response treats the spelling as a question worth investigating, not an error to correct or a rule to supply. The teacher becomes a co-investigator.",
      },
    ],
  },

  2: {
    1: [
      {
        splitAt: "## Where Conflation Happens in Classrooms",
        question: "You've read the three-unit model. Without looking back: name the three units and their layers.",
        answer: "Morpheme → morphological layer (units of meaning). Grapheme → orthographic layer (written units that represent phonemes). Phoneme → phonological layer (units of sound). Each layer has its own unit; conflating them — calling a morpheme a grapheme, or a grapheme a phoneme — produces errors that cannot be investigated within the confused framework.",
      },
    ],
    2: [
      {
        splitAt: "## Free Bases and Bound Bases: A Preview",
        question: "Is <un-> a morpheme in every word where it appears? What is the test — and what does the test reveal about 'uncle'?",
        answer: "No. The test: does this string carry a consistent meaning across all words where it appears? In 'unkind,' 'unwise,' 'unfair' — yes, <un-> means 'not.' In 'uncle' — no isolable meaning of 'not' applies. 'Uncle' is a single morpheme borrowed from Latin 'avunculus.' The string is only a morpheme where the meaning test passes.",
      },
    ],
    3: [
      {
        splitAt: "## Investigation: `<phone>`",
        question: "You've investigated <night> and <ship>. How many graphemes does 'night' have? Name them. How many does 'ship' have?",
        answer: "'Night': three graphemes — <n>, <igh>, <t>. The string <igh> is one grapheme representing /aɪ/. 'Ship': three graphemes — <sh>, <i>, <p>. The string <sh> is one grapheme representing /ʃ/. In both cases, multi-letter strings function as single orthographic units. Treating each letter as a grapheme misrepresents the system.",
      },
    ],
    4: [
      {
        splitAt: "## The Schwa Problem",
        question: "Phonemes are described as 'abstractions.' What does this mean — and why does it matter for understanding why phonological analysis has limits?",
        answer: "A phoneme is a mental category, not a physical sound. Different productions of 'the same' phoneme are physically different but perceived as identical by speakers of that language. The phoneme /p/ in 'pot' and 'stop' are acoustically distinct (aspirated vs. unaspirated) but the same phoneme. For spelling: phonemic analysis tells you which phoneme is present, but not which grapheme to use for it.",
      },
    ],
    5: [
      {
        splitAt: "## Investigation: `<dict>`",
        question: "You've verified <struct> and <rupt>. State the verification test for a bound base — and what a failed test reveals.",
        answer: "The test: does the proposed base meaning hold consistently across all members of the word family? For <struct> (build/arrange) — construct, instruct, structure, destruction all pass. For <rupt> (break) —rupt, disrupt, corrupt, erupt, bankrupt all pass. A failed test reveals that the proposed meaning is wrong — it must be revised. Failure is information about the word's history or etymology, not about the student.",
      },
    ],
    6: [
      {
        splitAt: "## The Word Sum as a Testable Claim",
        question: "You've read the anatomy of a word sum and the role of the + sign and →. What makes a word sum falsifiable — and therefore useful?",
        answer: "Every element in a word sum makes a claim: this is a prefix with this meaning; this is the base; this suffix does this job. Each claim can be tested. If any element fails the meaning test, the sum is wrong and must be revised. A word sum is not a display of spelling — it is a falsifiable hypothesis about morphological structure.",
      },
    ],
    7: [
      {
        splitAt: "## Case Study 3 — Morpheme-Phoneme Collapse",
        question: "Case Study 1 was grapheme-letter collapse. Case Study 2 was morpheme-syllable collapse. State the analytical error made in each.",
        answer: "Case Study 1: treating 'letters' as the unit of orthographic analysis rather than 'graphemes.' A grapheme may consist of more than one letter; 'letter' has no analytical role in SWI. Case Study 2: treating syllable division as morpheme boundary detection. A syllable is a phonological unit; a morpheme is a meaning unit. They often don't align — 'happiness' divides morphologically as happy + ness, not hap-pi-ness.",
      },
    ],
  },

  3: {
    1: [
      {
        splitAt: "## What the Four Questions Do Together",
        question: "You've read the demonstration of the Four Questions on 'sign.' Before reading what they do together: what does each question add that the previous question alone cannot provide?",
        answer: "Q1 establishes meaning — without it you can't test word family membership. Q2 reveals the family — without it you can't write a reliable word sum. Q3 establishes structure — without it you can't identify the graphemes to analyze. Q4 asks about grapheme function — answerable only because Q1–Q3 have constrained the possibilities. Each question makes the next question possible.",
      },
    ],
    2: [
      {
        splitAt: "## Testing a Boundary: Does *sign* Mean \"Mark\" in *assigned*?",
        question: "You've read three worked investigations of Q1. What distinguishes a testable base meaning from a dictionary definition?",
        answer: "A testable base meaning is a hypothesis that must hold consistently across all members of the word family — it is falsifiable. A dictionary definition describes one word's meaning. The base meaning must survive the test ('does this meaning apply in this word too?'). If it fails for any clear family member, the hypothesis must be revised. Inquiry, not lookup.",
      },
    ],
    3: [
      {
        splitAt: "## Worked Investigation: *discover*",
        question: "You've run the verification of 'unpleasant.' What are the four things you must check when verifying any word sum?",
        answer: "(1) Does the prefix carry its established meaning in this word? (2) Does the base carry its established meaning? (3) Does the suffix perform its established function? (4) Do join conventions at the + boundaries correctly produce the surface spelling? All four must pass. One failed check = hypothesis needs revision.",
      },
    ],
    4: [
      {
        splitAt: "## Case 2: *island* vs. *isle*",
        question: "You've investigated the <sign> family. What does Q3 reveal about 'sign/signal/signature/significant' that Q4-first could never have produced?",
        answer: "That the <g> in 'sign' marks the base <sign> and is phonologically active in 'signal' and 'signature.' The family transforms the <g> from an anomaly into evidence of a system. Q4-first would only ask why <g> is silent — a question that presupposes silence and blocks the family investigation. Q3 makes the family visible; Q4 then has something real to explain.",
      },
    ],
    5: [
      {
        splitAt: "## Worked Example 2: The `<b>` in *doubt*",
        question: "You've worked through the <g> in 'sign.' Why is 'why is the <g> in sign silent?' a worse starting question than 'what is this <g> doing?'",
        answer: "The first question presupposes the conclusion — that the <g> IS silent — before investigating. It is Q4 asked without Q1–Q3, which means there is no family evidence available. The second question is neutral: it doesn't assume silence, and it can be answered in multiple ways (marking the base, preserving an etymological connection, indicating a word family). Neutral questions open investigations; loaded questions close them.",
      },
    ],
    6: [
      {
        splitAt: "## Full Cycle: *construction*",
        question: "You've read the five stages of the inquiry cycle. Name them without looking back.",
        answer: "Observe (notice a feature or question in the word), Hypothesize (propose a word sum and/or base meaning), Test (verify each element: does the meaning hold? do join conventions apply?), Conclude (confirm or revise the hypothesis), Reflect (ask what new investigations this opens — which related words? which graphemes to explore?).",
      },
    ],
    7: [
      {
        splitAt: "## Side by Side: *signal* in a Reading Passage",
        question: "You've read how the Four Questions routine is established. What is the cumulative effect of applying it briefly and consistently every day?",
        answer: "Students build the habit of treating unfamiliar words as investigable rather than arbitrary. The routine changes how they relate to language: each unknown word becomes a question worth asking, not an obstacle to bypass. The teacher's consistent modeling — even for 3 minutes — demonstrates that every spelling feature has a reason, and that the reason is findable.",
      },
    ],
  },

  4: {
    1: [
      {
        splitAt: "## The Module's Commitment",
        question: "You've read the three frameworks. Without looking back: name them and give one example of a spelling each explains.",
        answer: "Positional constraints — <ck> after short vowel (back, truck). Morphological stability — <g> in 'sign' preserved across the family (signal, signature). Etymology — <ph> for /f/ in Greek-origin words (phone, photograph), <ch> → /ʃ/ in French-origin words (chef, chauffeur). Each framework explains a class of spelling choices that the other two cannot.",
      },
    ],
    2: [
      {
        splitAt: "## Pair 2 — `<tch>` versus `<ch>`",
        question: "You've read the <ck> vs. <k> constraint. State the rule: when is <ck> used?",
        answer: "<ck> is used immediately after a short vowel at the end of a syllable or base (back, brick, clock, truck, neck). <k> is used after a long vowel (make, like), a vowel team (book, look), a consonant (milk, silk), or at the start of a word (king, keep). The constraint is positional — entirely determined by what immediately precedes the /k/ phoneme.",
      },
    ],
    3: [
      {
        splitAt: "## `<muscle>` → `<muscular>`",
        question: "You've worked through 'sign/signal' and 'electric/electricity.' State the morphological stability principle precisely.",
        answer: "When a grapheme's primary function is to preserve the visual identity of a base or morpheme across word family members, its spelling remains constant even when its phonological function varies across those members. The grapheme marks the morpheme; its phonological behavior is secondary and context-dependent.",
      },
    ],
    4: [
      {
        splitAt: "## Latin Influence — The `<b>` in *debt*",
        question: "You've read about French and Greek borrowings. What orthographic principle do they both illustrate?",
        answer: "Each language of origin brings its own spelling conventions into English. French words carry French rules (<ch> → /ʃ/); Greek words carry Greek rules (<ph> → /f/, <ch> → /k/, <ps> → /ps/). Recognizing a word's language of origin predicts which spelling system applies — making the grapheme choice understandable rather than arbitrary.",
      },
    ],
    5: [
      {
        splitAt: "## Investigate `<c>` Across Five Words",
        question: "You've investigated <ea> across three environments. What did the investigation reveal about how to frame questions about multi-environment graphemes?",
        answer: "The question 'what sound does <ea> make?' is unanswerable as a single-rule question — <ea> represents /iː/, /ɛ/, and /eɪ/ in different words. The productive question is: 'In this word, what phoneme does <ea> represent — and what determines that?' The investigation looks for the contextual and historical factors that explain the specific representation. No single rule; multiple findable reasons.",
      },
    ],
    6: [
      {
        splitAt: "## Pair 2 — *divine* / *divinity*",
        question: "You've read Pair 1: sane/sanity. Why does the base spelling stay the same even though the vowel sound shifts?",
        answer: "English spelling prioritizes the morphological identity of the base over phonological representation. Preserving the base spelling (sane) keeps the visual connection between 'sane' and 'sanity' visible to readers who already know either word. If the spelling changed with the pronunciation, the semantic link would be visually severed — requiring readers to learn the two forms as unrelated words.",
      },
      {
        splitAt: "## Pair 4 — *photograph* / *photography*",
        question: "You've read Pairs 2 and 3 (divine/divinity and electric/electricity). What single principle explains all three pairs?",
        answer: "Morphological stability (base constancy): the base is spelled consistently across all word family members regardless of phonological variation. The vowel shifts are real phonological phenomena — but the spelling does not follow the phonology. It follows the morphology. The base is always spelled the same because it is always the same meaningful unit.",
      },
    ],
    7: [
      {
        splitAt: "## The `<gh>` in *light*",
        question: "You've read the <b> in 'debt' and the <k> in 'know.' What pattern do these two explanations share?",
        answer: "Both graphemes preserve evidence of an earlier form that is no longer pronounced. The <b> in 'debt' was restored by Renaissance scholars from Latin 'debitum.' The <kn-> in 'know' reflects Old English when the consonant cluster /kn-/ was pronounced. In both cases, the grapheme is a historical record — the spelling preserves the word's etymology even after the sound was lost.",
      },
    ],
  },

  5: {},

  6: {
    1: [
      {
        splitAt: "## The Distinguishing Feature",
        question: "You've read the three responses (direct answer, hinting, guided). What does the guided response produce that the other two do not?",
        answer: "The guided response initiates an investigation — the student engages the morphological system through their own reasoning. The direct answer provides information. The hinting response steers toward a predetermined answer. Only the guided response produces inquiry: the student checks a word family, asks Q1, finds related words. The teacher starts the process; the student runs it.",
      },
    ],
    2: [
      {
        splitAt: "## Grades 4 Through 8 — Full Investigation Across the Curriculum",
        question: "You've read K–3 implementation. How does SWI look in Kindergarten — and what is NOT done at that stage?",
        answer: "In Kindergarten: free bases only (sunshine, playground, helpful), Q1 and Q2 only (meaning and word family), no formal word sum notation, no bound bases. The framework is introduced through familiar, meaningful words. What is NOT done yet: explicit morpheme boundary notation, bound base investigation, full Four Questions cycle. The schema is built before the tools.",
      },
    ],
    3: [
      {
        splitAt: "## What This Looks Like in Practice",
        question: "You've read the five structural features supporting neurodivergent learners. What specifically changes about cognitive demand when students have a principle rather than a list?",
        answer: "Principled instruction replaces recall of arbitrary items with application of a testable system. For students with working memory limitations, recalling 50 separate spelling rules is far more demanding than applying 3 frameworks (position, morphology, etymology) to a new word. The principle does cognitive work that memorization requires the student to do alone — and often cannot sustain.",
      },
    ],
    4: [
      {
        splitAt: "## An Example: Replacing the Quiz",
        question: "You've read the distinction between testing and consolidating assessment. State the difference in your own words.",
        answer: "Testing assessment measures isolated recall under time pressure: is this spelled correctly? right or wrong? Consolidating assessment requires students to apply, explain, and demonstrate: write a word sum, investigate a word, correct an error and explain what was wrong. The consolidating form develops the morphological competence; the testing form only samples whether the student currently has it.",
      },
    ],
    5: [
      {
        splitAt: "## What All Three Students Reach",
        question: "You've read the 'Three Students, One Word' scenario. What does the diversity of entry points demonstrate about the design of the Four Questions?",
        answer: "It demonstrates that the framework is flexible enough to meet students wherever they are — the student entering through meaning, the student entering through a known related word, and the student entering through a grapheme observation can all be directed toward the same investigative process. The entry point doesn't determine the outcome; the teacher's guided question redirects all three toward Q1.",
      },
    ],
    6: [
      {
        splitAt: "## What Assumed Competence Is Not",
        question: "A student says the base of 'unhappy' is <unhappy>. Write the assumed-competence response you would give — not the correction.",
        answer: "Something like: 'Interesting — let's test that. If <unhappy> is the base, what would it mean? Can you find other words that use <unhappy> as a base the way <help> works in helpful and unhelpful?' The investigation reveals that <unhappy> doesn't function as a base — only <happy> does. The student reaches the correction through their own inquiry, not through being told.",
      },
    ],
    7: [
      {
        splitAt: "## Week 2 — Small-Group Investigation with Guided Questions",
        question: "In Week 1, the teacher models the full inquiry cycle. What is the teacher's specific role — and what should students NOT be expected to do yet?",
        answer: "The teacher models everything: noticing, hypothesizing, testing, concluding, reflecting. Students observe and begin to internalize the routine. They are NOT yet expected to run inquiries independently, raise word questions spontaneously, or apply the Four Questions without support. Week 1 builds the schema; Weeks 2–4 build the practice.",
      },
    ],
  },
};
