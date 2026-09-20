// Original revision notes. Stable IDs are shared by notes, search and progress.
export const sources = [
 {id:'main26',title:'JEE Main 2026 · official syllabus',url:'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',status:'Verified: organic units 13–20'},
 {id:'adv26',title:'JEE Advanced 2026 · official syllabus',url:'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',status:'Verified: chemistry pages 5–8'},
 {id:'xi-goc',title:'NCERT XI · Organic Chemistry: Basic Principles',url:'https://ncert.nic.in/textbook/pdf/kech202.pdf',status:'Available; exhaustive subsection audit pending'},
 {id:'xi-hc',title:'NCERT XI · Hydrocarbons',url:'https://ncert.nic.in/textbook/pdf/kech203.pdf',status:'Available; exhaustive subsection audit pending'},
 {id:'xii-halo',title:'NCERT XII · Haloalkanes and Haloarenes',url:'https://ncert.nic.in/textbook/pdf/lech201.pdf',status:'Available; exhaustive subsection audit pending'},
 {id:'xii-oh',title:'NCERT XII · Alcohols, Phenols and Ethers',url:'https://ncert.nic.in/textbook/pdf/lech202.pdf',status:'Source retrieval failed; independent source check pending'},
 {id:'xii-co',title:'NCERT XII · Aldehydes, Ketones and Carboxylic Acids',url:'https://ncert.nic.in/textbook/pdf/lech203.pdf',status:'Preparation methods spot-checked; full subsection audit pending'},
 {id:'xii-n',title:'NCERT XII · Amines',url:'https://ncert.nic.in/textbook/pdf/lech204.pdf',status:'Basicity and selected preparations spot-checked; full subsection audit pending'},
 {id:'xii-bio',title:'NCERT XII · Biomolecules',url:'https://ncert.nic.in/textbook/pdf/lech205.pdf',status:'Source retrieval failed; independent source check pending'}
];
const S=(id,title,points=[],extra={})=>({id,title,points,...extra});
const T=(headers,rows)=>({headers,rows});
export const chapters=[
{id:'goc',title:'General Organic Chemistry',short:'GOC',sourceIds:['main26','adv26','xi-goc'],prereqs:[],sections:[
S('bonding','Structure, bonding & representation',[
'Carbon is tetravalent. sp³: tetrahedral, approximately 109.5°; sp²: trigonal planar, approximately 120°; sp: linear, 180°. A double bond is one σ + one π bond; a triple bond is one σ + two π bonds.',
'Skeletal formula: each unlabelled end/vertex is carbon; hydrogens on carbon complete valence. Heteroatoms and their attached hydrogens must be shown. Ph = C₆H₅; Bn = C₆H₅CH₂; R = alkyl; Ar = aryl.',
'A homologous series shares a functional group and general formula; successive members differ by CH₂. Acyclic saturated hydrocarbons: CₙH₂ₙ₊₂. Each ring or π bond removes two hydrogens relative to saturation.',
'Degree of unsaturation = (2C + 2 + N − H − X)/2 for usual neutral closed-shell formulas; O and S do not enter this expression. Count triple bonds as two units.'],{table:T(['Feature','Effect'],[['More s character','Shorter, stronger comparable C–H bonds; sp carbon stabilizes negative charge better than sp², then sp³'],['σ bond','Head-on overlap; usually permits rotation unless constrained'],['π bond','Side-on overlap; rotation disrupts overlap']])}),
S('naming','Classification & nomenclature',[
'Choose the principal characteristic group; choose an allowed parent containing it and the required unsaturation. Number to give the suffix group priority, then multiple bonds, then substituents. Compare locants at the first point of difference; do not minimize their sum.',
'Useful priority sequence: carboxylic acid > sulfonic acid > ester > acid halide > amide > nitrile > aldehyde > ketone > alcohol > amine > double/triple bonds. Halo, nitro and alkoxy normally act as prefixes.',
'Alphabetize substituent names; ignore multiplicative di-, tri-, tetra- for simple substituents. Use N- locants for groups directly attached to nitrogen. Retain e only where the suffix convention requires it: ethan-1-ol, ethane-1,2-diol.',
'Both alkene and alkyne present: give multiple bonds the lowest locants; in an otherwise tied numbering, double bond takes the lower locant. A suffix group outranks this tie-break.',
'Cyclic parent with external –CHO uses carbaldehyde; external –COOH uses carboxylic acid. Benzene-1,4-diol is also hydroquinone. o-, m-, p- identify 1,2 / 1,3 / 1,4 disubstituted benzenes.',
'Examples: CH₃CH(OH)CH₂CHO = 3-hydroxybutanal; CH₃COCH₂COOH = 3-oxobutanoic acid. In phenylmethanamine the nitrogen is on the side chain, unlike benzenamine.']),
S('effects','Inductive effect, resonance & hyperconjugation',[
'Inductive effect is polarization through σ bonds; it falls rapidly with distance. Electron-withdrawing groups show −I; alkyl groups generally show +I relative to H.',
'Resonance moves electrons, not atoms. Contributors retain atomic connectivity and total charge. Octet satisfaction, less charge separation and suitable placement of charge improve a contributor; counting contributors alone is not a stability proof.',
'Conjugation requires adjacent orbitals that can overlap. A saturated sp³ atom normally interrupts it. Lone pair adjacent to a π system may donate (+R); –NO₂, –CN and carbonyl groups can withdraw (−R).',
'Halogens withdraw inductively but can donate a lone pair by resonance to an aromatic ring. Their deactivation and ortho/para direction describe different aspects of the reaction.',
'Hyperconjugation delocalizes a suitably aligned σ bond into a neighbouring p/π system. It helps explain alkyl stabilization of many carbocations, radicals and alkenes; identify adjacent C–H bonds, not all hydrogens in the molecule.',
'Electromeric effect is the older syllabus description of complete temporary displacement of π electrons under an attacking reagent. It is not a permanent σ polarization.']),
S('intermediates','Bond cleavage & intermediates',[],{table:T(['Species','Formation / geometry','Stability cues'],[['Carbocation','Heterolysis; simple alkyl C⁺ is planar sp²','Resonance and electron donation stabilize; ordinary 3° > 2° > 1° > methyl'],['Carbanion','Heterolysis; simple alkyl C⁻ usually pyramidal','Withdrawal and resonance stabilize; ordinary alkyl trend reverses the cation trend'],['Radical','Homolysis; one unpaired electron','Resonance and hyperconjugation stabilize; simple alkyl 3° > 2° > 1° > methyl'],['Carbene','Neutral divalent carbon, e.g. :CCl₂','Electron-deficient intermediate; distinguish from a charged carbon']]),callout:'Do not rank a resonance-stabilized ion against an arbitrary alkyl ion using substitution count alone. Vinyl and aryl cations are not benzyl cations.'}),
S('acid-base','Acidity, basicity & solvent',[
'Acidity: compare HA ⇌ H⁺ + A⁻ by the relative stability of A⁻ and HA in the same medium. Lower pKₐ means stronger acid. An effect that stabilizes both sides must be compared on both sides.',
'EWGs generally strengthen carboxylic acids by stabilizing carboxylate. Multiple nearby withdrawing substituents usually amplify this; the inductive effect weakens with separation.',
'Typical aqueous acidity ladder: carboxylic acid > phenol > water / simple alcohols > terminal alkyne > alkene / alkane. Use only as a class-level guide; substitutions and solvent alter values.',
'Basicity: compare B and BH⁺, considering lone-pair availability, resonance, induction and solvation. Larger Kb / smaller pKb means stronger base; larger pKa of BH⁺ means stronger B in the same solvent.',
'Pyridine has a lone pair outside the aromatic π system. Pyrrole uses its nitrogen lone pair in the aromatic sextet. Piperidine has an ordinary amine lone pair; cyclic versus acyclic is not a universal basicity rule.',
'Nucleophilicity is kinetic; basicity is equilibrium. A bulky strong base may be a poor substitution nucleophile. In polar protic media, halide nucleophilicity commonly I⁻ > Br⁻ > Cl⁻ > F⁻; solvation changes the comparison in aprotic media.'],{links:['amines:basicity','alcohols:phenol-acidity','acids:acidity']}),
S('aromaticity','Aromaticity & reaction language',[
'Aromatic: cyclic, approximately planar, continuously conjugated, with 4n + 2 π electrons. Antiaromatic: the same geometric/conjugation requirements but 4n π electrons. A nonplanar or interrupted ring can be nonaromatic instead.',
'Benzene: 6 π electrons. Cyclopentadienyl anion: 6; tropylium cation: 6; cyclopentadienyl cation: 4 if planar and conjugated. Count a participating lone pair as two electrons and an empty p orbital as zero.',
'Electrophiles accept an electron pair (NO₂⁺, carbocations, BF₃). Nucleophiles donate one (OH⁻, CN⁻, NH₃, alkenes). A neutral molecule can be a nucleophile or electrophile.',
'Substitution replaces a group; addition consumes unsaturation; elimination creates unsaturation; rearrangement changes the carbon framework. Curved full arrows start at an electron pair/bond and end where it goes.'],{links:['hydrocarbons:benzene']}),
S('traps','Exceptions & common reasoning traps',[
'A resonance contributor is not a rapidly interconverting isomer. Only the hybrid represents the molecule.',
'A −I group does not literally remove an electron from the molecule. It shifts electron density through bonds.',
'Aromatic means satisfying structure and electron-count requirements, not simply containing a hexagon.',
'An observed acidity or basicity order needs its solvent. Do not transfer a gas-phase order to water.'],{kind:'exception'})],checklist:['Decode a skeletal structure and count implicit H','Identify sp, sp² and sp³ atoms','Count σ/π bonds and unsaturation','Assign the suffix functional group','Use the first point of difference for locants','Distinguish Ph from Bn','Draw valid resonance contributors','Identify +I/−I and +R/−R','Locate hyperconjugating bonds','Compare carbocations with resonance considered','Compare carbanions and radicals','Check all aromaticity conditions','Compare conjugate bases in a stated medium','Distinguish nucleophilicity from basicity','Identify substitution, addition, elimination and rearrangement']},
{id:'isomerism',title:'Isomerism & Conformations',short:'Isomerism',sourceIds:['main26','adv26','xi-goc','xi-hc'],prereqs:['goc:bonding'],sections:[
S('structural','Structural isomerism',[],{table:T(['Type','Same formula, different…','Example'],[['Chain','Carbon skeleton','Butane / 2-methylpropane'],['Position','Position of functional group or unsaturation','Propan-1-ol / propan-2-ol'],['Functional','Functional group','Ethanol / methoxymethane'],['Metamerism','Distribution around a divalent group','Ethoxyethane / 1-methoxypropane'],['Ring-chain','Ring versus open-chain unsaturation','Cyclopropane / propene'],['Tautomerism','Position of H and π bond in equilibrium','Keto ⇌ enol']])}),
S('geometric','Geometrical isomerism',[
'Restricted rotation is necessary. For an ordinary alkene, each double-bond carbon must carry two different substituents. A terminal CH₂= group cannot show this form of geometrical isomerism.',
'Cis/trans identifies same/opposite side for an appropriate shared pair; it is not a universal naming system for all alkenes. Ring constraints can also give cis/trans isomers.',
'Cis often has a greater net dipole and higher boiling point; trans often packs better and can have a higher melting point. These are structural tendencies, not universal laws.',
'Advanced 2026 explicitly excludes R/S and E/Z assignments. The notes retain geometrical relationships without requiring those assignment algorithms.']),
S('optical','Chirality & stereochemical relationships',[
'A chiral object is not superimposable on its mirror image. A tetrahedral carbon with four different substituents is a common stereogenic centre; do not assume it is the only possible source of chirality.',
'Enantiomers are nonsuperimposable mirror images. Diastereomers are stereoisomers that are not mirror images. Constitutional isomers have different connectivity.',
'A meso compound has stereogenic centres yet is achiral because of internal symmetry. For identical ends and two comparable centres, a mirror plane can reduce four formal combinations to three distinct stereoisomers.',
'Maximum 2ⁿ stereoisomers for n independent tetrahedral centres before accounting for symmetry/constraints. Count distinct structures, not drawings.',
'A racemate contains equal quantities of enantiomers and gives zero net optical rotation through external compensation. A meso compound is itself achiral; mixing is unnecessary.',
'Enantiomers have the same ordinary physical properties in achiral environments except opposite optical rotations; they may behave differently with chiral reagents or environments. Diastereomers generally differ in physical properties.',
'Optical rotation sign (+/−) cannot be inferred from a drawing alone. Advanced scope is limited to relationships in compounds with up to two asymmetric centres.'],{links:['haloalkanes:mechanisms']}),
S('conformations','Ethane & butane conformations',[
'Newman projection looks along a C–C bond: front carbon at the centre, rear carbon represented by a circle. Sawhorse looks obliquely at the bond.',
'Ethane: staggered is lower in energy than eclipsed because torsional strain is smaller; neighbouring staggered/eclipsed arrangements differ by 60° rotation.',
'Butane about C₂–C₃: anti (methyl groups 180° apart) is lowest; gauche (60° apart) is higher; eclipsed arrangements are higher still, with methyl–methyl fully eclipsed highest.',
'Conformers interconvert by single-bond rotation. Configurational isomers generally require bond-breaking to interconvert; do not count ethane conformers as separate structural isomers.']),
S('tautomerism','Keto–enol recall',[
'A conventional carbonyl compound needs an α-H for keto–enol tautomerism. Transfer of H accompanies movement of the double bond; this is not resonance.',
'Keto form often dominates for simple aldehydes/ketones. Enol stabilization can rise through conjugation, internal hydrogen bonding or aromaticity.',
'Symmetry can make enols generated on different-looking sides identical. Check connectivity before counting.'],{links:['carbonyls:alpha']}),
S('traps','Counting traps',[
'Four visibly different drawing directions do not guarantee four chemically different groups.',
'Use whole substituent paths to compare groups. Two CH₂ groups may lead to different groups farther away.',
'Zero observed rotation could indicate an achiral molecule or a racemate; it does not establish meso structure.'],{kind:'exception'})],checklist:['Distinguish structural and stereoisomers','Recognize each structural-isomer class','Check both ends of an alkene','Identify possible ring cis/trans relationships','Find a stereogenic centre','Test mirror-image superimposability','Distinguish enantiomers and diastereomers','Recognize a meso structure','Apply symmetry before 2ⁿ counting','Distinguish racemate from meso','Read Newman and sawhorse projections','Rank ethane and butane conformations','Distinguish tautomerism from resonance']},
{id:'hydrocarbons',title:'Hydrocarbons',short:'Hydrocarbons',sourceIds:['main26','adv26','xi-hc'],prereqs:['goc:intermediates','goc:aromaticity','isomerism:conformations'],sections:[
S('classification','Families & physical properties',[
'Acyclic alkane CₙH₂ₙ₊₂; one acyclic alkene or saturated monocycle CₙH₂ₙ; one acyclic alkyne CₙH₂ₙ₋₂. These formulas alone do not uniquely identify a family.',
'Hydrocarbons are poorly soluble in water and soluble in nonpolar media. Dispersion forces increase with size; branching usually lowers boiling point among comparable isomers by reducing contact area.',
'Melting point depends strongly on symmetry and packing; it cannot be ranked reliably from the boiling-point branching rule. Most common liquid hydrocarbons are less dense than water.',
'Alkenes: locate the double bond in the parent; alkynes: locate the triple bond. Common names include ethylene (ethene), acetylene (ethyne), toluene (methylbenzene), styrene (ethenylbenzene).']),
S('preparation','Preparation methods',[],{reactionIds:['wurtz','soda-lime','kolbe-electrolysis','alkane-reduction','dehydrohalogenation','dehydration','dehalogenation','alkyne-preparation','acetylene-calcium','benzene-trimer']}),
S('alkanes','Alkanes: substitution & oxidation',[
'Halogenation proceeds by a radical chain: initiation splits X₂ using light/heat; propagation abstracts H then regenerates X• by reaction with X₂; termination combines radicals.',
'Product ratios depend on the number of each kind of H and its relative abstraction rate. Bromination is more selective than chlorination. Equivalent hydrogens must be counted with symmetry.',
'Complete combustion yields CO₂ and H₂O. Oxygen shortage can give CO or soot. Strongly controlled oxidation can stop at oxygenated products; ordinary uncontrolled oxidation is not a selective synthesis.',
'Longer chains can crack under suitable heat/catalysis. Aromatization of suitable straight-chain alkanes under catalytic conditions produces arenes.'],{reactionIds:['radical-halogenation','benzylic-bromination']}),
S('addition','Alkenes: addition & cleavage',[
'Electrophilic addition of HX commonly forms the more stable carbocation: H attaches so that the positive centre is better stabilized, followed by X⁻ attack. Rearrangements are possible when carbocations form.',
'The peroxide effect is the radical anti-Markovnikov addition of HBr. Do not extend it to HCl or HI; the propagation energetics do not support an analogous chain.',
'X₂ addition proceeds through a bridged halonium ion in the usual picture, limiting free-carbocation rearrangements. In water, competing nucleophilic attack gives a halohydrin with OH preferentially on the more substituted carbon.',
'Ozonolysis cuts the C=C. A carbon bearing H can give an aldehyde under reductive workup; no attached H gives a ketone. Reconstruct the starting alkene by joining carbonyl carbons.',
'Cold dilute alkaline KMnO₄ and hot concentrated/acidified KMnO₄ are different transformations. Oxidative cleavage may oxidize aldehyde fragments further.',
'Polymerization opens the π bond without removing the carbon skeleton; identify the repeat unit from the monomer.'],{reactionIds:['alkene-hydrogenation','hx-addition','peroxide-hbr','bromine-addition','halohydrin','alkene-hydration','hydroboration','baeyer','ozonolysis','alkene-cleavage'],links:['polymers:addition']}),
S('alkynes','Alkynes: acidity & addition',[
'A terminal alkyne has an acidic H attached to sp carbon. Internal alkynes do not. NaNH₂ can form acetylide; aqueous NaOH is not sufficient for useful complete deprotonation.',
'Metal acetylide formation with ammoniacal silver/copper reagents identifies terminal alkynes. Ordinary alkene hydrogens do not show this reaction.',
'One equivalent versus excess HX/X₂ changes the addition product. HX addition can lead to a geminal dihalide after two equivalents.',
'Acid/Hg²⁺ hydration gives an enol that tautomerizes: ethyne gives ethanal; other terminal alkynes give methyl ketones. Unsymmetrical internal alkynes can give mixtures.',
'Lindlar reduction of an internal alkyne gives a cis alkene; Na/liquid NH₃ gives a trans alkene. Catalytic excess H₂ generally continues to the alkane.'],{reactionIds:['alkyne-lindlar','alkyne-sodium','alkyne-hydration','acetylide-alkylation'],links:['carbonyls:preparation']}),
S('benzene','Benzene & electrophilic aromatic substitution',[
'Benzene is a planar conjugated six-π-electron ring with equivalent C–C bonds. Electrophilic substitution restores aromaticity; addition would sacrifice it.',
'EAS sequence: generate electrophile → ring attack forms a nonaromatic σ complex → deprotonation restores aromaticity. σ-complex stabilization helps explain directing effects.',
'Activating ortho/para groups: –OH, –OR, –NH₂ and alkyl. Deactivating meta groups: –NO₂, –CN, –CHO, –COR, –COOH, –COOR, –SO₃H, –NR₃⁺. Halogens are deactivating but ortho/para directing.',
'Aniline under strongly acidic conditions becomes anilinium, changing its directing effect. Protection by acylation permits controlled aromatic substitution.',
'Friedel–Crafts alkylation can rearrange and polyalkylate. Acylation usually avoids rearrangement and deactivates the product. Strongly deactivated rings and aniline–Lewis-acid complexes do not undergo the usual reaction.',
'Sulfonation is reversible: hot dilute acid/steam can remove –SO₃H. This allows its use as a temporary blocking group.',
'Side-chain oxidation to benzoic acid requires at least one benzylic H; tert-butylbenzene is a key exception. Ring halogenation and side-chain radical halogenation need different conditions.'],{reactionIds:['nitration','aromatic-halogenation','sulfonation','friedel-alkyl','friedel-acyl','sidechain-oxidation'],links:['amines:aromatic','alcohols:phenol-reactions']}),
S('traps','Reaction-condition traps',[
'Allylic/benzylic substitution preserves the double bond/aromatic ring; it is not addition across the double bond.',
'Do not use Wurtz with two different halides when a single unsymmetrical alkane must be isolated cleanly.',
'“Bromine decolourized” is not unique to an alkene: alkynes and activated aromatic systems can also consume bromine.'],{kind:'exception'})],checklist:['Recognize hydrocarbon formulas and naming','Explain boiling versus melting trends','Recall Wurtz and its mixtures','Track soda-lime and Kolbe carbon counts','Write radical-chain steps','Count equivalent H for halogenation','Choose substitution versus ring halogenation conditions','Apply Markovnikov with rearrangement checks','Restrict peroxide effect to HBr','Distinguish hydrogenation catalysts','Reconstruct alkene from ozonolysis','Distinguish cold and hot KMnO₄','Identify terminal alkyne acidity','Predict Hg²⁺ hydration products','Generate an acetylide C–C bond','Explain EAS restoration of aromaticity','Recall nitration and sulfonation conditions','Apply directing effects including halogens','Identify Friedel–Crafts limitations','Check for a benzylic H']},
{id:'haloalkanes',title:'Haloalkanes & Haloarenes',short:'Halogen compounds',sourceIds:['main26','adv26','xii-halo'],prereqs:['goc:intermediates','goc:acid-base'],sections:[
S('classification','Classification & C–X bond',[
'Classify 1°, 2°, 3° by the carbon bearing halogen, not the halogen count. Allylic and benzylic halides have X on an sp³ carbon next to C=C or an arene; vinylic and aryl halides have X directly on sp² carbon.',
'Name halogen as a prefix. Geminal dihalides have both X on one C; vicinal dihalides have X on neighbouring C atoms.',
'C–X is polarized Cδ⁺–Xδ⁻. Along alkyl fluorides → iodides, bond length increases and bond strength generally decreases. Dipole moment depends on both charge separation and length; it is not simply electronegativity order.',
'For comparable alkyl groups, boiling point often rises RCl < RBr < RI; branching generally lowers it. Poor water solubility results because hydration does not compensate well for disrupted water–water interactions.']),
S('preparation','Preparation & halogen exchange',[],{reactionIds:['alcohol-socl2','alcohol-hx','finkelstein','swarts','hx-addition','radical-halogenation','aromatic-halogenation','sandmeyer-cl','sandmeyer-br','balz-schiemann']}),
S('mechanisms','SN1 / SN2 / E1 / E2 decision table',[],{table:T(['Path','Kinetic / structural idea','Outcome & competition'],[['SN1','Slow ionization; rate ∝ [substrate]. Stable carbocation and ionizing solvent favour it','Rearrangement possible; attack on planar ion gives racemization, often with excess inversion from ion-pair effects'],['SN2','One concerted backside attack; rate ∝ [substrate][nucleophile]. Methyl > 1° > 2° ≫ 3° for comparable substrates','Inversion at attacked centre; no carbocation rearrangement; polar aprotic solvent often helps anionic nucleophiles'],['E1','Ionization then β-deprotonation; carbocation shared with SN1','Rearrangement possible; heat often increases elimination proportion'],['E2','Concerted β-H removal / leaving-group loss; strong base','Requires appropriate antiperiplanar arrangement; bulky base often favours less substituted alkene']]),callout:'Substrate, nucleophile/base, solvent and temperature act together. “Alcoholic KOH = elimination” is a useful exam cue, not a universal mechanistic law.',links:['isomerism:optical','goc:acid-base']}),
S('reactions','Substitution, elimination & organometallic chemistry',[],{reactionIds:['halo-hydrolysis','dehydrohalogenation','cyanide','isocyanide','nitrite','silver-nitrite','ammonolysis','williamson','grignard-formation','wurtz'],table:T(['Nucleophile','Typical product from suitable R–X'],[['OH⁻','R–OH'],['RO⁻','R–OR'],['CN⁻ with KCN','R–CN, one extra carbon'],['AgCN','R–NC preferentially'],['KNO₂','R–ONO preferentially'],['AgNO₂','R–NO₂ preferentially'],['Excess NH₃','Primary amine favoured; further alkylation still possible']])}),
S('aryl','Haloarenes',[
'Aryl C–X is strengthened by conjugation and involves sp² carbon. Ordinary SN1 is disfavoured by an unstable aryl cation; ordinary SN2 backside displacement at aryl carbon is disfavoured.',
'Electron-withdrawing –NO₂ at ortho/para can stabilize the addition intermediate for nucleophilic aromatic substitution. A meta –NO₂ does not provide that same resonance stabilization.',
'For activated addition–elimination SNAr, leaving-group reactivity can be F > Cl > Br > I, unlike common alkyl substitution. The rate-limiting step can be nucleophilic addition.',
'Chlorobenzene can hydrolyse with NaOH under harsh conditions, followed by acidification to phenol. Do not infer ordinary room-temperature hydrolysis.',
'Advanced 2026 excludes benzyne mechanism and cine substitution. Retain the transformation and stated conditions without expanding into those mechanisms.'],{reactionIds:['chlorobenzene-hydrolysis','fittig','wurtz-fittig'],links:['hydrocarbons:benzene']}),
S('facts','Uses & environmental facts',[
'Chloroform can oxidize in air/light to toxic phosgene; standard textbook storage involves closed dark bottles and an ethanol stabilizer. This is a recall fact, not a handling procedure.',
'Iodoform is a yellow solid associated with the iodoform test and historical antiseptic use. Freons are chlorofluorocarbon refrigerants linked to ozone depletion.',
'DDT is a persistent organochlorine insecticide; environmental persistence and biological accumulation are key concerns. Carbon tetrachloride has historical solvent/fire-extinguisher uses but substantial toxicity.'],{kind:'fact'}),
S('traps','Exceptions & traps',[
'Benzyl chloride is reactive in substitution; chlorobenzene is not an equivalent substrate.',
'Tertiary halides cannot give normal SN2; strong bases usually produce elimination.',
'Dry ether is essential for Grignard formation; water or other acidic H sources destroy RMgX by protonation.'],{kind:'exception'})],checklist:['Classify alkyl, vinyl, allyl, aryl and benzyl halides','Distinguish geminal and vicinal','Recall C–X bond trends','Use SOCl₂, HX and exchange routes','Predict SN1/SN2 from all conditions','Track inversion versus racemization','Check carbocation rearrangements','Check β-H availability for elimination','Distinguish KCN from AgCN','Distinguish KNO₂ from AgNO₂','Prevent further amine alkylation conceptually','Recognize Grignard incompatibility with acidic H','Explain low aryl-halide reactivity','Locate activating nitro groups for SNAr','Recall Wurtz/Fittig/Wurtz–Fittig','Recall chloroform, freon and DDT facts']},
{id:'alcohols',title:'Alcohols, Phenols & Ethers',short:'Alcohols, phenols & ethers',sourceIds:['main26','adv26','xii-oh'],prereqs:['goc:acid-base','haloalkanes:mechanisms','hydrocarbons:benzene'],sections:[
S('classification','Classification, names & properties',[
'Alcohol: OH on an sp³ carbon; phenol: OH directly on an aromatic carbon; enol: OH on a C=C carbon. Classify alcohol degree using the OH-bearing carbon.',
'Name alcohol by -ol and its locant; polyols by diol/triol. Ethers use alkoxyalkane naming. Anisole = methoxybenzene; glycerol = propane-1,2,3-triol; ethylene glycol = ethane-1,2-diol.',
'Alcohols can donate and accept hydrogen bonds, raising boiling points relative to comparable ethers/alkanes. Ethers accept water hydrogen bonds but cannot self-donate them.',
'Water solubility falls as the hydrophobic alkyl portion increases. Branching can increase water solubility among isomeric alcohols by reducing the effective hydrophobic surface.',
'o-Nitrophenol forms intramolecular H bonds and is more steam-volatile; p-nitrophenol forms stronger intermolecular association. Do not rank them from molecular mass alone.']),
S('preparation','Preparation toolkit',[],{reactionIds:['alkene-hydration','hydroboration','halo-hydrolysis','carbonyl-nabh4','grignard-carbonyl','acid-lah','ester-lah','chlorobenzene-hydrolysis','cumene','diazonium-oh','williamson','ether-dehydration']}),
S('alcohol-reactions','Alcohol reactions & identification',[
'O–H cleavage with active metals releases H₂ and forms alkoxide. C–O cleavage by HX or phosphorus/thionyl halides gives a haloalkane under suitable conditions.',
'Acid-catalysed dehydration: protonate OH, lose water and eliminate β-H. Secondary/tertiary substrates can form carbocations and rearrange; primary alcohols need not form free primary carbocations.',
'Dehydration ease commonly 3° > 2° > 1°. A β-H is required. Alkene substitution/stability and steric effects influence the major product.',
'Lucas reagent = concentrated HCl + anhydrous ZnCl₂. Turbidity from insoluble chloride: ordinary 3° rapid, 2° slower, 1° little at room temperature. Benzylic/allylic alcohols are exceptions; water solubility also affects observation.',
'Heated copper: ordinary 1° alcohol → aldehyde; 2° → ketone by dehydrogenation; 3° commonly dehydrates. Oxidation by strong oxidants is a different process.'],{reactionIds:['alcohol-sodium','alcohol-socl2','alcohol-hx','dehydration','alcohol-pcc','alcohol-dichromate','secondary-oxidation','esterification','ether-dehydration'],links:['carbonyls:tests']}),
S('phenol-acidity','Phenol acidity',[
'Phenoxide delocalizes negative charge; alkoxide lacks comparable ring delocalization. Phenol is therefore more acidic than ordinary aliphatic alcohols.',
'Phenol reacts with NaOH but ordinarily not NaHCO₃. Carboxylic acids usually liberate CO₂ from bicarbonate; this distinguishes them from phenols.',
'Nitro substituents increase phenol acidity, especially at ortho/para through resonance withdrawal. Alkyl donation generally decreases it. Multiple nitro groups can give a much stronger acid.',
'Resonance stabilization must be compared for both acid and conjugate base; neither contributor-counting nor a single inductive label is a complete proof.'],{links:['goc:acid-base','acids:acidity']}),
S('phenol-reactions','Phenol reactions',[
'The OH group activates ortho/para positions. Bromine water readily gives the 2,4,6-tribromo derivative; controlled bromination in a nonpolar medium gives mainly mono-substitution.',
'Dilute HNO₃ gives ortho/para nitrophenols; strong nitrating conditions give picric acid (2,4,6-trinitrophenol). Sulfonation distribution depends on temperature, with ortho favoured near room temperature and para at higher temperature.',
'Phenol can be reduced to benzene using zinc dust; oxidation gives quinone products. Acetylation of salicylic acid at phenolic OH gives aspirin.',
'Phenol gives a characteristic coloured complex with neutral FeCl₃; colour varies with phenol structure and conditions. Not every coloured FeCl₃ result uniquely identifies phenol.'],{reactionIds:['phenol-bromine','kolbe-schmitt','reimer-tiemann','phenol-zinc','phenol-oxidation','aspirin'],links:['practical:functional']}),
S('ethers','Ethers: synthesis & cleavage',[
'Williamson synthesis is SN2: choose the less hindered partner as alkyl halide. For tert-butyl methyl ether, tert-butoxide + methyl halide is the useful orientation; tertiary halide tends to eliminate.',
'Aryl–alkyl ethers form from phenoxide + suitable alkyl halide. Unactivated aryl halides are not ordinary Williamson SN2 substrates.',
'HI/HBr protonate ether oxygen, then cleave C–O. For methyl/ordinary primary versus more substituted groups, attack usually favours the less hindered alkyl group by SN2; tertiary groups can cleave by SN1.',
'Anisole + HI cleaves the alkyl–O bond to phenol + CH₃I, not the aryl–O bond. With sufficient reagent/conditions, an aliphatic alcohol first formed may convert further to alkyl halide.',
'Anisole activates its aromatic ring and directs ortho/para in electrophilic substitution.'],{reactionIds:['williamson','ether-cleavage','anisole-cleavage']}),
S('facts','Factual recall & traps',[
'Methanol is highly toxic; ethanol has industrial solvent/fuel uses. Denatured alcohol has additives making it unsuitable for consumption. These are textbook facts.',
'PCC can stop a primary alcohol at aldehyde in anhydrous conditions; acidified dichromate under reflux generally continues to carboxylic acid.',
'Do not apply an alcohol-classification test to a phenol as though OH were bonded to an sp³ carbon.'],{kind:'exception'})],checklist:['Classify alcohol, phenol and enol','Name alcohols and ethers','Compare H bonding and solubility','Explain o-/p-nitrophenol volatility','Choose hydration versus hydroboration products','Predict Grignard alcohol degree','Distinguish O–H and C–O cleavage','Recall Lucas and its exceptions','Predict dehydration with rearrangement checks','Choose PCC versus strong oxidant','Distinguish phenol from carboxylic acid by bicarbonate','Apply phenol substituent effects','Recall phenol bromination/nitration','Recall Kolbe–Schmitt and Reimer–Tiemann','Recall cumene and diazonium phenol routes','Choose correct Williamson partners','Predict ether cleavage site','Recall aspirin precursor and OH acetylation']},
{id:'carbonyls',title:'Aldehydes & Ketones',short:'Aldehydes & ketones',sourceIds:['main26','adv26','xii-co'],prereqs:['goc:effects','goc:acid-base','alcohols:alcohol-reactions'],sections:[
S('structure','Structure, names & physical properties',[
'Aldehyde has at least one H on carbonyl carbon; ketone has two carbon groups. Carbonyl carbon is approximately planar sp² and electrophilic; oxygen is electron rich.',
'Suffixes: -al and -one. Formaldehyde = methanal; acetaldehyde = ethanal; acetone = propanone; acetophenone = 1-phenylethan-1-one; benzaldehyde = C₆H₅CHO.',
'Dipole–dipole forces give higher boiling points than comparable hydrocarbons/ethers, usually lower than hydrogen-bond-donating alcohols. Smaller members dissolve appreciably in water through hydrogen bonding to oxygen.',
'Carbonyl addition reactivity for simple comparable substrates: methanal > other aldehydes > ketones. Steric crowding and alkyl donation reduce electrophilicity. Conjugation/substituents can alter this.']),
S('preparation','Preparation methods',[],{reactionIds:['alcohol-pcc','secondary-oxidation','ozonolysis','alkyne-hydration','rosenmund','stephen','dibal','etard','gattermann-koch','friedel-acyl','nitrile-grignard']}),
S('addition','Nucleophilic addition & condensation',[
'Under basic conditions, nucleophile attacks carbonyl C to give a tetrahedral alkoxide, then protonation. Under acid catalysis, oxygen protonation increases electrophilicity before a weak nucleophile attacks.',
'Formation of a stereogenic centre from an achiral planar carbonyl with achiral reagents commonly gives a racemate. Existing stereocentres can alter selectivity.',
'HCN addition is assisted by CN⁻; excess strong acid suppresses CN⁻. Bisulfite addition is useful for many aldehydes and less hindered ketones but is not universal.',
'With alcohol: hemiacetal has OH and OR on one carbon; acetal has two OR groups. Acid catalysis and removal of water favour acetal formation; aqueous acid hydrolyses it.',
'Ammonia derivatives with an N–H group condense by addition then loss of water. Hydroxylamine → oxime; hydrazine → hydrazone; semicarbazide → semicarbazone; 2,4-DNPH → coloured hydrazone.',
'Imine formation uses a primary amine; ordinary secondary amines with suitable α-H carbonyl substrates can form enamines. Tertiary amines cannot form the analogous neutral imine by loss of N–H.'],{reactionIds:['cyanohydrin','bisulfite','oxime','hydrazone','acetal','imine','grignard-carbonyl'],links:['acids:derivatives']}),
S('oxidation-reduction','Oxidation & reduction',[
'Aldehydes oxidize readily to carboxylic acids/carboxylates; ordinary ketones resist mild oxidation and undergo C–C cleavage with strong conditions.',
'NaBH₄ usually reduces aldehydes and ketones but not ordinary esters/acids/amides under standard conditions. LiAlH₄ is stronger and requires dry conditions before a separate workup.',
'Clemmensen uses strongly acidic conditions; Wolff–Kishner uses strongly basic heated conditions. Choose according to other functional-group compatibility. Both convert C=O into CH₂.',
'Formaldehyde is oxidized to formate by mild aldehyde tests; further oxidation can give CO₂ under stronger conditions.'],{reactionIds:['carbonyl-nabh4','tollens','clemmensen','wolff-kishner']}),
S('alpha','α-H, aldol, Cannizzaro & haloform',[
'An α-H sits on carbon adjacent to C=O. Its removal gives a resonance-stabilized enolate. This allows aldol chemistry and α-substitution.',
'Aldol addition gives a β-hydroxy carbonyl; heating/dehydration gives an α,β-unsaturated carbonyl. At least the donor partner must have an α-H.',
'Crossed aldol with two enolizable substrates can produce mixtures. A non-enolizable acceptor with a controlled donor makes planning easier; count the new C–C bond explicitly.',
'Cannizzaro: a non-enolizable aldehyde in strong base disproportionates to alcohol + carboxylate. In crossed Cannizzaro with formaldehyde, formaldehyde is preferentially oxidized.',
'Haloform requires CH₃CO– or a substrate oxidizable to it, including CH₃CH(OH)– and ethanol/ethanal. Methanol is negative. The methyl carbon leaves as CHX₃.',
'Benzaldehyde lacks an α-H and is Cannizzaro-positive. Acetaldehyde has α-H and gives aldol under the usual dilute-base conditions.'],{reactionIds:['aldol','cannizzaro','haloform'],links:['isomerism:tautomerism','practical:functional']}),
S('tests','Tests & exceptions',[],{table:T(['Test','Positive pattern','Important limit'],[['2,4-DNPH','Most aldehydes and ketones: yellow/orange/red precipitate','Does not distinguish aldehyde from ketone'],['Tollens','Aldehydes: silver deposition','Reducing sugars and some α-hydroxy ketones also reduce it'],['Fehling','Many aliphatic aldehydes: brick-red Cu₂O','Ordinary aromatic aldehydes usually negative; sugars can be positive'],['Iodoform','Methyl ketone / appropriate oxidizable alcohol: yellow CHI₃','Not all ketones or all alcohols'],['Schiff reagent','Many aldehydes restore pink/magenta colour','Kinetics and substrate affect response']]),callout:'Fructose is a ketose but reduces alkaline aldehyde reagents via enediol rearrangement. A positive Tollens test does not prove an isolated –CHO in the starting structure.',links:['biomolecules:sugars']}),
S('traps','Conversion traps',[
'Nitrile carbon becomes the carbonyl carbon on hydrolysis or controlled reduction. It is not removed.',
'A Grignard reagent reacts with an ester twice under normal excess-reagent conditions. Stopping at the ketone is not the default.',
'A carbonyl with no α-H cannot be the usual aldol enolate donor, but may still be the acceptor.'],{kind:'exception'})],checklist:['Name common carbonyls','Explain electrophilicity and planarity','Compare aldehyde/ketone addition','Recall oxidation and dehydrogenation routes','Choose Rosenmund, Stephen or DIBAL','Prepare benzaldehyde by selective routes','Apply nitrile + Grignard','Predict cyanohydrin and bisulfite products','Distinguish hemiacetal and acetal','Match ammonia derivatives to products','Choose NaBH₄ versus LiAlH₄','Choose Clemmensen versus Wolff–Kishner','Locate α-H','Predict aldol addition and condensation','Check crossed-aldol mixtures','Recognize Cannizzaro conditions','Track haloform carbon loss','Interpret Tollens and Fehling exceptions','Distinguish carbonyl test from aldehyde test']},
{id:'acids',title:'Carboxylic Acids & Derivatives',short:'Acids & derivatives',sourceIds:['main26','adv26','xii-co'],prereqs:['goc:acid-base','carbonyls:addition'],sections:[
S('classification','Names & physical properties',[
'Carboxylic acid = RCOOH; acid chloride = RCOCl; anhydride = (RCO)₂O; ester = RCOOR′; amide = RCONH₂ / RCONHR′ / RCONR′₂.',
'Methanoic/formic, ethanoic/acetic, ethanedioic/oxalic, propanedioic/malonic and butanedioic/succinic acid are useful common-name pairs. Benzoic acid has COOH directly on the ring.',
'Ester names place the alcohol-derived alkyl group first: CH₃COOC₂H₅ = ethyl ethanoate. Do not exchange the acyl and alkoxy sides.',
'Carboxylic acids associate by hydrogen bonding, often as dimers in nonpolar media/vapour. Lower acids dissolve well in water; solubility decreases with larger nonpolar groups.',
'Amides have strong polarity and often strong intermolecular hydrogen bonding when N–H is present. Their nitrogen lone pair is delocalized and not as basic as an amine lone pair.']),
S('preparation','Preparation routes',[],{reactionIds:['alcohol-dichromate','sidechain-oxidation','nitrile-hydrolysis','grignard-co2','ester-hydrolysis','amide-hydrolysis']}),
S('acidity','Acid-strength comparisons',[
'The carboxylate conjugate base distributes charge over two oxygen atoms. Compare electron effects at equivalent positions and in the same medium.',
'For halogen-substituted comparable aliphatic acids, stronger/more numerous/closer −I groups generally increase acidity. Moving Cl farther from COOH reduces its effect.',
'Formic acid is stronger in water than acetic acid; alkyl donation contributes to weakening simple alkyl carboxylic acids. Actual values also include solvation and structural effects.',
'Electron-withdrawing ring substituents generally strengthen benzoic acid, especially when resonance withdrawal can act; electron donors tend to weaken it. Ortho-substituted benzoic acids exhibit additional steric/solvation effects, so a simple para rule is insufficient.',
'Reaction with bicarbonate liberates CO₂ for ordinary carboxylic acids. Phenol usually cannot displace carbonic acid from bicarbonate.'],{links:['alcohols:phenol-acidity','goc:acid-base']}),
S('reactions','Acid reactions',[],{reactionIds:['esterification','acid-chloride','amide-formation','acid-lah','hvh','soda-lime','kolbe-electrolysis'],callout:'Hell–Volhard–Zelinsky requires an α-H. Benzoic acid has none on an adjacent sp³ carbon and does not give the ordinary HVZ reaction.'}),
S('derivatives','Nucleophilic acyl substitution',[
'Nucleophile adds to the acyl carbon → tetrahedral intermediate → leaving group departs, restoring C=O. Unlike addition to an ordinary ketone, a replaceable group is present.',
'Usual reactivity under comparable conditions: acid chloride > anhydride > ester > amide. Leaving-group ability and resonance donation explain the trend; protonation and conditions can modify it.',
'Acid chlorides react with water, alcohols and ammonia/amines to give acids, esters and amides. Extra base or ammonia neutralizes the HCl by-product.',
'Acid-catalysed ester hydrolysis is reversible. Base hydrolysis produces carboxylate and is driven forward; acid workup is needed to obtain the neutral acid.',
'Amide hydrolysis requires stronger acidic/basic conditions than ordinary ester hydrolysis. Acidic hydrolysis gives ammonium; basic hydrolysis can release ammonia/amine.',
'LiAlH₄ reduces acids/esters to alcohols but amides to amines. In amide reduction the carbonyl carbon remains; Hofmann degradation removes it.'],{reactionIds:['ester-hydrolysis','amide-hydrolysis','ester-lah','amide-reduction','hofmann','rosenmund','dibal'],links:['amines:preparation']}),
S('traps','Carbon accounting & exceptions',[
'R–X → R–CN → R–COOH adds one carbon relative to R–X; RCOONa → RH removes the carboxyl carbon.',
'Formic acid can act as a reducing agent; do not infer that every carboxylic acid is Tollens-negative without considering this special case.',
'Ester + excess Grignard typically gives a tertiary alcohol with two copies of the incoming R group; a formate ester gives a secondary alcohol.'],{kind:'exception'})],checklist:['Recognize all major acid derivatives','Name the two sides of an ester','Explain acid H bonding','Recall nitrile, oxidation and Grignard routes','Compare acid strength with distance effects','Handle ortho effects cautiously','Distinguish phenol and acid with bicarbonate','Write Fischer esterification','Convert acid to chloride and amide','Check α-H for HVZ','Track decarboxylation carbon loss','Explain addition–elimination at acyl carbon','Rank derivative reactivity conditionally','Distinguish acid and base ester hydrolysis','Predict LiAlH₄ products for each derivative','Distinguish amide reduction and Hofmann']},
{id:'amines',title:'Amines',short:'Amines',sourceIds:['main26','adv26','xii-n'],prereqs:['goc:effects','goc:acid-base','haloalkanes:mechanisms'],sections:[
S('classification','Classification & nomenclature',[
'Count carbon groups directly attached to N: RNH₂ primary; R₂NH secondary; R₃N tertiary. This is different from classifying the carbon attached to OH or X.',
'Aliphatic and aromatic classification depends on whether nitrogen is directly attached to an aromatic carbon. Benzylamine is a primary aliphatic/arylalkyl amine; aniline is a primary aromatic amine.',
'Use alkanamine names with locants; use N- for substituents on nitrogen. CH₃CH₂NHCH₃ = N-methylethanamine; C₆H₅NH₂ = benzenamine (aniline).',
'Simple amine N is pyramidal with a lone pair; rapid nitrogen inversion normally prevents isolation of enantiomers based only on an ordinary amine nitrogen.']),
S('preparation','Preparation methods',[],{reactionIds:['nitro-reduction','ammonolysis','nitrile-reduction','amide-reduction','gabriel','hofmann'],table:T(['Route','Carbon bookkeeping','Limitation'],[['Nitrile reduction','Keeps the nitrile carbon as CH₂','Prior R–X → RCN step added one carbon'],['Amide reduction','Retains carbonyl carbon','Gives RCH₂NH₂ from RCONH₂'],['Hofmann degradation','Loses carbonyl carbon','Needs an appropriate primary amide'],['Gabriel','Transfers alkyl group intact','Ordinary route gives primary aliphatic amines, not aryl amines from ArX']])}),
S('physical','Physical properties',[
'Primary and secondary amines self-associate through N–H hydrogen bonds. Tertiary amines cannot donate N–H hydrogen bonds but can accept water hydrogen bonds.',
'Comparable primary/secondary amines generally boil above tertiary isomers; amines usually boil below comparable alcohols because N–H hydrogen bonding is weaker.',
'Small amines are water soluble. Increasing the nonpolar portion reduces water solubility; salt formation with acids often increases aqueous solubility.']),
S('basicity','Basicity: explicitly include the medium',[
'Compare the stability of B and BH⁺, not just the number of alkyl groups. Induction, resonance, sterics and hydration all matter.',
'Simple alkylamines in gas phase broadly follow 3° > 2° > 1° > NH₃. In water there is no one substitution-degree order for all alkyl groups.',
'Aniline is less basic than ammonia in water because its nitrogen lone pair is delocalized into the ring. Benzylamine does not have this direct lone-pair conjugation.',
'Electron donors generally increase basicity of substituted anilines; withdrawing groups decrease it. Position, steric inhibition and solvation can compete, especially at ortho.',
'Pyridine and pyrrole cannot be grouped together merely because both are aromatic N heterocycles. Identify whether the accepting lone pair belongs to the aromatic π system.'],{table:T(['Series / medium','Decreasing basicity'],[['Methylamines / water','(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃'],['Ethylamines / water','(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃'],['Representative aqueous classes','Simple alkylamine > NH₃ > aniline']]),links:['goc:acid-base']}),
S('reactions','Alkylation, acylation & identification',[
'Alkylation can continue through 1°, 2°, 3° amines to quaternary ammonium salt. Excess ammonia favours primary amine in ammonolysis but does not make the route perfectly selective.',
'Primary and secondary amines form amides on acylation. Tertiary amines lack N–H and do not give that usual neutral amide product.',
'Carbylamine is positive for primary aliphatic and aromatic amines. Secondary and tertiary amines do not give the test.',
'Hinsberg reagent is benzenesulfonyl chloride: a primary amine gives an N–H sulfonamide soluble in alkali and reprecipitated on acidification; secondary gives insoluble N,N-disubstituted sulfonamide; tertiary does not form this sulfonamide and dissolves in dilute acid as a salt.'],{reactionIds:['amine-acylation','carbylamine'],links:['practical:functional','acids:derivatives']}),
S('nitrous','Nitrous acid: distinguish amine classes',[],{table:T(['Substrate','Usual outcome'],[['Primary aliphatic amine','Unstable diazonium intermediate; N₂ evolution with alcohol/alkene/rearranged mixtures possible'],['Primary aromatic amine, 273–278 K','Relatively persistent aryl diazonium salt in cold solution'],['Secondary amine','N-nitroso compound'],['Tertiary aliphatic amine','Salt formation; no primary-amine diazotization'],['Tertiary aromatic amine','Ring nitrosation can occur at a free para position']]),reactionIds:['diazotization'],links:['diazonium:replacements']}),
S('aromatic','Aniline: aromatic substitution & protection',[
'Aniline strongly activates the ring; bromine water gives 2,4,6-tribromoaniline. To control mono-substitution, protect NH₂ as acetanilide and hydrolyse after substitution.',
'Direct nitration in strong acid produces anilinium and can give substantial meta product with other isomers/oxidation. Acyl protection reduces activation and permits controlled mainly para nitration.',
'Aniline with strong sulfuric acid and heating gives sulfanilic acid, commonly represented as a zwitterion. Aniline does not undergo normal Friedel–Crafts due to Lewis-acid complexation.',
'Conversion planning: install nitro by nitration, reduce to amine, then diazotize if a diazonium substitution is needed. “Benzene to aniline” uses nitration followed by nitro reduction.'],{reactionIds:['aniline-bromine','amine-acylation'],links:['diazonium:coupling','hydrocarbons:benzene']}),
S('traps','Exceptions & traps',[
'“Cyclic amines are weaker than acyclic amines” is false. Piperidine is a normal strong amine base; pyrrole’s lone pair is constrained by aromaticity.',
'Hofmann bromamide changes carbon count; reduction of the same amide does not.',
'A primary amine means one carbon group on N, even when that group is tert-butyl.'],{kind:'exception'})],checklist:['Classify amines by groups on N','Distinguish aniline and benzylamine','Use N- locants','Predict all six preparation routes','Track carbon retention/loss','Know Gabriel aryl-halide limitation','Explain H bonding and salt solubility','State the medium for basicity','Recall aqueous methyl/ethyl orders','Explain aniline lone-pair delocalization','Avoid cyclic/acyclic blanket rules','Predict exhaustive alkylation','Know which amines acylate','Apply carbylamine specificity','Apply all three Hinsberg outcomes','Predict nitrous-acid products by class','Maintain diazotization temperature','Explain aniline protection','Plan benzene → aniline']},
{id:'diazonium',title:'Diazonium Salts',short:'Diazonium salts',sourceIds:['main26','adv26','xii-n'],prereqs:['amines:nitrous','hydrocarbons:benzene'],sections:[
S('formation','Formation & structure',[
'Aryl diazonium salts have Ar–N₂⁺ X⁻. They are prepared from primary aromatic amines using nitrous acid generated in situ from nitrite and acid, typically at 273–278 K.',
'Diazotization: nitrosating species reacts at amine N; proton transfers and dehydration produce the diazonium group. Keep this distinct from azo coupling at an activated aromatic carbon.',
'Aliphatic diazonium ions usually decompose readily; the useful cold aryl salt chemistry cannot be transferred directly to all primary amines.',
'These entries describe examination transformations, not procedures for isolating or handling diazonium compounds.'],{reactionIds:['diazotization']}),
S('replacements','Reactions releasing nitrogen',[],{reactionIds:['sandmeyer-cl','sandmeyer-br','sandmeyer-cn','gattermann','diazonium-i','balz-schiemann','diazonium-oh','diazonium-h','diazonium-nitro'],callout:'KI replacement does not require copper catalyst. Fluoride preparation uses tetrafluoroborate chemistry; do not replace it with the ordinary CuCl/HCl recipe.'}),
S('coupling','Azo coupling',[
'An aryl diazonium ion acts as electrophile toward a strongly activated aromatic ring. The azo linkage Ar–N=N–Ar′ retains both nitrogen atoms.',
'Phenol couples most usefully under alkaline conditions where phenoxide activates the ring; aniline coupling uses suitably mildly acidic conditions so excessive protonation does not suppress ring activation.',
'Coupling usually occurs at a free para position, otherwise an available ortho position. The product’s extended conjugation often gives strong colour.',
'p-Hydroxyazobenzene comes from benzenediazonium + phenol; p-aminoazobenzene (aniline yellow) comes from the corresponding coupling with aniline.'],{reactionIds:['azo-phenol','azo-aniline'],links:['practical:preparations']}),
S('conversions','Conversion planning',[
'Benzene → nitrobenzene → aniline → diazonium → phenol/haloarene/nitrile. This permits substitutions unavailable by direct simple displacement on benzene.',
'Replacing NH₂ by H after its use as a directing handle removes the temporary nitrogen function. Diazotization then H₃PO₂ accomplishes this in the curated toolkit.',
'Ar–N₂⁺ → Ar–CN → Ar–COOH introduces a new carbon. Ar–N₂⁺ → Ar–Cl does not.',
'Sandmeyer is replacement using Cu(I) salts; Gattermann replacement uses copper powder with the relevant hydrogen halide. Gattermann–Koch is a different aromatic formylation reaction.']),
S('traps','Retention versus replacement',[
'Azo coupling retains the N=N unit; most diazonium replacements evolve N₂.',
'Do not use aniline’s strong-acid nitration behaviour as the model for controlled azo coupling.',
'Cold formation and subsequent warm hydrolysis are separate conditions, not contradictory instructions.'],{kind:'exception'})],checklist:['Identify ArN₂⁺ and counterion','Recall starting amine and nitrite/acid','Recall 273–278 K formation','Differentiate aliphatic instability','Match CuCl/CuBr/CuCN replacements','Recall KI replacement','Recall tetrafluoroborate route to F','Recall warm hydrolysis to phenol','Recall H₃PO₂ replacement by H','Distinguish Sandmeyer and Gattermann–Koch','Choose phenol/aniline coupling medium','Locate para/ortho coupling site','Track N₂ retention or loss','Track carbon addition via cyanide']},
{id:'biomolecules',title:'Biomolecules',short:'Biomolecules',sourceIds:['main26','adv26','xii-bio'],prereqs:['carbonyls:addition','isomerism:optical'],sections:[
S('classification','Carbohydrate classification',[
'Carbohydrates are polyhydroxy aldehydes/ketones or substances yielding them on hydrolysis. The old “hydrate of carbon” formula is not a sufficient definition.',
'Monosaccharides cannot be hydrolysed into simpler carbohydrates; oligosaccharides give a few monosaccharide units; polysaccharides give many. Aldose/ketose identifies the carbonyl type in the open-chain form.',
'Glucose is an aldohexose; fructose a ketohexose. D/L describes relative configuration, not optical-rotation sign. D-glucose is dextrorotatory; D-fructose is levorotatory.']),
S('sugars','Glucose, fructose & anomers',[
'Open-chain glucose has CHO at C₁ and CH₂OH at C₆. Most dissolved glucose is cyclic hemiacetal: C₁ reacts with C₅–OH to form a six-membered pyranose ring.',
'α- and β-D-glucose differ at the anomeric carbon C₁. In conventional Haworth drawings for D-glucose, α anomeric OH is trans to the terminal CH₂OH substituent; β is cis.',
'Mutarotation is the change in optical rotation as anomers interconvert through the open chain. An acetal-locked anomeric centre cannot open in the same way under neutral conditions.',
'Glucose is reduced to sorbitol and oxidized mildly to gluconic acid; stronger oxidation can oxidize both ends to a dicarboxylic acid. Acetylation of all five OH groups forms a pentaacetate.',
'An aldose reacts with hydroxylamine to an oxime and with HCN to a cyanohydrin through its accessible open-chain fraction. Glucose’s failure in some usual aldehyde tests reflects its predominantly cyclic form.',
'Fructose can form cyclic hemiketal rings. It reduces Tollens/Fehling in alkaline conditions because of enediol-mediated interconversion to aldoses.',
'A glycoside locks the anomeric OH as an acetal/ketal linkage. Acid hydrolysis can regenerate the sugar.'],{links:['carbonyls:tests']}),
S('di-poly','Disaccharides & polysaccharides',[],{table:T(['Carbohydrate','Units / linkage','Reducing behaviour'],[['Sucrose','Glucose α(1→2)β fructose; both anomeric centres linked','Nonreducing; hydrolysis yields glucose + fructose (invert sugar)'],['Maltose','Glucose α(1→4) glucose','Reducing: one free anomeric centre'],['Lactose','Galactose β(1→4) glucose','Reducing: one free anomeric centre'],['Starch','α-glucose; amylose mainly α(1→4), amylopectin also α(1→6) branches','Plant storage polysaccharide'],['Glycogen','Highly branched α-glucose polymer','Animal storage polysaccharide'],['Cellulose','β(1→4) glucose polymer','Structural plant fibre; not digested by human cellulase']])}),
S('proteins','Amino acids & protein structure',[
'α-Amino acid: amino and carboxyl groups attached to the same α carbon. Glycine is achiral; most common other α-amino acids have a chiral α carbon.',
'Amino acids commonly exist as zwitterions ⁺H₃N–CHR–COO⁻. At low pH the net charge tends positive; at high pH negative. The isoelectric point is the pH of zero average net charge.',
'Peptide bond is –CO–NH– between amino acids. For a linear chain of n amino-acid residues there are n−1 peptide links and n−1 waters formally lost on condensation.',
'Primary structure = sequence. Secondary = local α helix / β sheet stabilized by backbone H bonding. Tertiary = overall folding of one chain. Quaternary = arrangement of multiple subunits.',
'Fibrous proteins serve structural roles; globular proteins often have functional/catalytic roles. Disulfide bridges involve cysteine residues and help stabilize structure.',
'Denaturation disrupts higher-order structure and activity; ordinary denaturation need not hydrolyse peptide bonds or erase the primary sequence.',
'Enzymes are biological catalysts, usually proteins; they show substrate specificity and suitable pH/temperature ranges. Some RNA molecules also catalyse reactions.']),
S('nucleic','DNA & RNA',[
'Nucleoside = nitrogenous base + sugar; nucleotide = nucleoside + phosphate. Purines: adenine, guanine. Pyrimidines: cytosine, thymine, uracil.',
'DNA contains 2-deoxyribose and A/G/C/T; RNA contains ribose and A/G/C/U. Nucleotides join through 3′–5′ phosphodiester bonds.',
'DNA duplex strands are antiparallel. A–T pairing has two hydrogen bonds; G–C has three. Base sequence carries genetic information.',
'RNA roles include information transfer (mRNA), adaptor function (tRNA) and ribosomal structure/catalysis (rRNA). RNA is commonly single-stranded but can fold into paired regions.']),
S('vitamins','Vitamins & hormones',[],{table:T(['Vitamin','Solubility / function','Deficiency association'],[['A','Fat-soluble; vision','Night blindness'],['B₁','Water-soluble; metabolic coenzyme precursor','Beriberi'],['B₂','Water-soluble; flavin coenzymes','Cheilosis / skin changes'],['B₆','Water-soluble; amino-acid metabolism','Neurological/metabolic disturbances'],['B₁₂','Water-soluble; blood/nerve function','Megaloblastic anaemia; pernicious anaemia relates to absorption'],['C','Water-soluble; collagen-related function','Scurvy'],['D','Fat-soluble; calcium/phosphate regulation','Rickets / osteomalacia'],['E','Fat-soluble; antioxidant','Reproductive/neuromuscular associations in textbook treatment'],['K','Fat-soluble; clotting protein activation','Impaired clotting']]),points:['Hormones are chemical messengers produced by endocrine tissues and acting at specific targets. Examples: insulin, thyroxine, adrenaline; not all hormones are proteins.','Fat-soluble vitamins: A, D, E, K. B group and C are water-soluble; B₁₂ is a notable water-soluble vitamin stored appreciably in the body.']}),
S('traps','Factual traps',[
'Sucrose is nonreducing because both anomeric centres are used, not because it lacks oxygen or hydroxyl groups.',
'D/L and +/− are independent labels. α/β is a third distinction involving the anomeric centre.',
'Protein denaturation is not synonymous with peptide-bond cleavage.'],{kind:'exception'})],checklist:['Classify mono-, oligo- and polysaccharides','Distinguish aldose and ketose','Draw glucose open-chain versus cyclic connectivity','Locate the anomeric centre','Distinguish α/β from D/L and +/−','Explain mutarotation','Recall glucose oxidation/reduction','Explain fructose reducing tests','Recall sucrose/maltose/lactose components','Identify free anomeric centres','Distinguish starch and cellulose linkages','Recognize zwitterion and isoelectric point','Count peptide bonds','Distinguish four protein-structure levels','Explain denaturation and enzymes','Distinguish nucleoside and nucleotide','Recall DNA/RNA sugars and bases','Recall base pairing and phosphodiester links','Classify vitamins and deficiencies','Define hormones without classifying all as proteins']},
{id:'polymers',title:'Polymers',short:'Polymers',advanced:true,sourceIds:['adv26'],prereqs:['hydrocarbons:addition','acids:derivatives'],sections:[
S('classification','Polymer classification',[
'Included in the verified Advanced 2026 syllabus; not a standalone Main 2026 unit. Supporting addition-polymerization chemistry remains relevant in hydrocarbons.',
'Addition polymerization joins unsaturated monomers without elimination of small molecules. Condensation polymerization links multifunctional monomers, commonly releasing H₂O/HCl or another small molecule.',
'Homopolymer uses one monomer species; copolymer uses more than one. Linear, branched and cross-linked describe topology, not the same classification as addition/condensation.',
'Thermoplastics soften on heating; thermosets cure into networks and do not simply remelt. Elastomers stretch reversibly; fibres emphasize intermolecular forces and tensile strength.']),
S('addition','Addition polymers & monomers',[],{table:T(['Polymer','Monomer','Recall'],[['Polyethene','Ethene','LDPE branched; HDPE more linear and more densely packed'],['PVC','Chloroethene (vinyl chloride)','Pipes / insulation'],['PTFE / Teflon','Tetrafluoroethene','Chemically resistant material'],['Polystyrene','Styrene','Packaging / insulation'],['PAN','Acrylonitrile','Fibre precursor'],['Natural rubber','Isoprene','cis-1,4-polyisoprene'],['Neoprene','Chloroprene','Synthetic rubber'],['Buna-S','Butadiene + styrene','Copolymer rubber'],['Buna-N','Butadiene + acrylonitrile','Oil-resistant rubber']])}),
S('condensation','Condensation polymers',[],{table:T(['Polymer','Starting units','Linkage / structure'],[['Nylon-6,6','Hexamethylenediamine + adipic acid','Polyamide'],['Nylon-6','Caprolactam','Ring-opening to polyamide'],['Terylene / Dacron','Ethylene glycol + terephthalic acid','Polyester'],['Bakelite','Phenol + formaldehyde','Cross-linked resin'],['Melamine–formaldehyde','Melamine + formaldehyde','Thermosetting resin'],['Cellulose','β-glucose units','Natural polysaccharide, β(1→4)']])}),
S('rubber','Rubber, vulcanization & biodegradability',[
'Natural rubber’s coiled cis-polyisoprene chains stretch and recoil. Vulcanization introduces sulfur cross-links, improving useful elasticity and resistance to flow.',
'Biodegradable polymers can be broken down biologically under suitable conditions. PHBV is a copolymer of 3-hydroxybutanoic and 3-hydroxypentanoic acids.',
'Nylon-2–nylon-6 derives from glycine and 6-aminohexanoic acid in standard textbook treatment. Do not assume every polyamide is readily biodegradable.',
'A repeat unit is not necessarily identical to a monomer’s full molecular formula for condensation polymers: account for eliminated small molecules.']),
S('traps','Classification traps',[
'Nylon-6 and nylon-6,6 have different starting materials. The digits are not polymerization degrees.',
'A copolymer need not be a condensation polymer: Buna-S is the counterexample.',
'Cellulose is a natural polymer even though it is not an addition polymer of an alkene.'],{kind:'exception'})],checklist:['Separate polymerization and topology classifications','Recognize homo-/copolymers','Distinguish thermoplastic/thermoset','Match PE/PVC/PTFE/PAN monomers','Distinguish LDPE and HDPE','Recall natural rubber stereochemistry','Recall neoprene and Buna monomers','Explain vulcanization','Distinguish nylon-6 and nylon-6,6','Recall polyester monomers','Recall Bakelite constituents','Recall PHBV and nylon-2–nylon-6','Account for condensation by-products']},
{id:'everyday',title:'Chemistry in Everyday Life',short:'Chemistry in everyday life',advanced:true,sourceIds:['adv26'],prereqs:['biomolecules:proteins'],sections:[
S('targets','Drug targets & classification',[
'Included in Advanced 2026; examples are required but drug structures are excluded in the official scope. These are exam classifications, not treatment recommendations.',
'Drugs interact with molecular targets such as enzymes or receptors. An inhibitor can compete at an active site or alter activity by binding elsewhere.',
'Agonists mimic a natural signal; antagonists block its action. Selectivity and dose influence both desired and unwanted effects.']),
S('classes','Therapeutic classes & examples',[],{table:T(['Class','Textbook role','Examples'],[['Antacids','Reduce excess gastric acidity','Sodium hydrogencarbonate, magnesium hydroxide, aluminium hydroxide'],['Acid-secretion inhibitors','Reduce acid secretion through a target','Cimetidine / ranitidine are historical textbook H₂-blocker examples'],['Antihistamines','Block selected histamine actions','Brompheniramine, terfenadine (historical examples)'],['Tranquilizers','Act on central nervous system pathways','Diazepam, meprobamate (classification only)'],['Non-narcotic analgesics','Pain / fever pathways','Aspirin, paracetamol'],['Antibiotics','Act against microorganisms','Penicillin, chloramphenicol, tetracycline'],['Antiseptics','Antimicrobials used on living tissue in appropriate formulations','Iodine preparations, chloroxylenol'],['Disinfectants','Antimicrobials for nonliving surfaces','Phenolic/chlorine-based formulations'],['Antifertility drugs','Hormonal modulation','Norethindrone; ethynylestradiol as estrogen component']]),callout:'Textbook examples can be historical. This index makes no claim about present clinical approval or appropriate personal use.'}),
S('food','Artificial sweeteners & food additives',[
'Sweetener names: saccharin, aspartame, alitame and sucralose. Advanced explicitly asks names only, so structures are not needed here.',
'Preservatives retard spoilage; antioxidants reduce oxidative deterioration. Sodium benzoate and salts of sorbic acid are common textbook preservative examples.',
'Artificial sweetness does not imply a substance is a carbohydrate; classification follows chemical structure.']),
S('cleansing','Soaps, detergents & cleansing',[
'Soaps are sodium/potassium salts of long-chain fatty acids. The nonpolar tail associates with grease; the polar ionic head associates with water.',
'Micelles aggregate above a suitable concentration: tails are directed inward around nonpolar material in water, heads outward. Emulsified dirt can then be removed with water.',
'Ca²⁺/Mg²⁺ in hard water form poorly soluble soaps, causing scum and loss of cleansing action. Acidic water protonates soap to poorly soluble fatty acid.',
'Anionic detergents have a negative polar group, e.g. alkylbenzenesulfonates. Cationic detergents commonly have quaternary ammonium groups. Nonionic detergents have neutral hydrophilic groups.',
'Suitable synthetic detergents work in hard water because they do not form the same insoluble calcium/magnesium salts. Linear chains are generally more readily biodegraded than extensively branched historical detergents.']),
S('traps','Terminology traps',[
'An antibiotic is not interchangeable with any antiseptic or disinfectant.',
'Therapeutic classification is not a recommendation to take a medicine; exam facts concern the class and target.',
'A detergent may be anionic, cationic or nonionic; “all detergents are sulfonate salts” is false.'],{kind:'exception'})],checklist:['Define enzyme/receptor target','Distinguish agonist and antagonist','Distinguish antacid from secretion blocker','Match the listed therapeutic classes','Differentiate antiseptic and disinfectant','Recall antibiotic examples','Recall antifertility examples','List four artificial sweeteners','Define soap chemically','Explain micelle orientation','Explain hard-water scum','Distinguish three detergent classes','Relate branching to biodegradation cautiously']},
{id:'practical',title:'Practical Organic Chemistry',short:'Practical chemistry',sourceIds:['main26','adv26','xi-goc'],prereqs:['carbonyls:tests','amines:reactions'],sections:[
S('purification','Purification & characterization',[],{table:T(['Method','Selection principle','Typical application'],[['Crystallization','Large hot/cold solubility difference; impurities behave differently','Purify a crystalline solid'],['Sublimation','One solid appreciably sublimes, another does not','Separate volatile solid from nonvolatile impurity'],['Simple distillation','Liquid volatility; sufficiently separated boiling behaviour','Volatile liquid from nonvolatile solute'],['Fractional distillation','Repeated vapour–liquid equilibration','Liquids with closer boiling points'],['Reduced-pressure distillation','Lower pressure lowers boiling temperature','High-boiling / thermally sensitive liquid'],['Steam distillation','Water-immiscible steam-volatile compound; vapour pressures add','Steam-volatile organic material'],['Differential extraction','Different partitioning between immiscible solvents','Transfer solute to a preferred phase'],['Chromatography','Different adsorption/partition affinities','Separate and identify mixture components']]),points:['TLC/paper Rf = distance travelled by solute spot / distance travelled by solvent front from the same origin. Compare Rf only under the same stationary phase, solvent and conditions.','Pure solids often have a narrow melting interval; impurities commonly depress/broaden it. A single melting/boiling value is not a complete structural identification.']}),
S('elements','Element detection: reasoning & observations',[
'Sodium-fusion analysis converts covalently bound elements into detectable ionic species: nitrogen → cyanide; sulfur → sulfide; halogens → halide. This is the chemical principle, not an unsupervised experiment guide.',
'Nitrogen test ultimately produces a Prussian-blue iron cyanide complex. Nitrogen detection needs a carbon source in the fusion chemistry.',
'Sulfur: sodium nitroprusside can give violet colour; lead salt test gives black PbS. When N and S occur together, thiocyanate chemistry can give blood-red ferric thiocyanate; excess sodium can change products.',
'Halide analysis uses nitric-acid-treated extract and AgNO₃. Cyanide/sulfide interference must be removed in the standard analytical scheme.',
'AgCl: white, soluble in dilute NH₃; AgBr: pale yellow, less soluble / dissolves in concentrated NH₃; AgI: yellow, insoluble in NH₃ under the usual test. Fluoride is not detected by this precipitation pattern.']),
S('quantitative','Quantitative analysis & formula calculation',[
'Combustion: carbon mass = (12/44) × mass CO₂; hydrogen mass = (2/18) × mass H₂O. Divide each elemental mass by sample mass for percentages.',
'Empirical formula: divide element mass percentages by atomic masses, normalize to the smallest mole amount, then obtain small whole-number ratios. Molecular formula multiplier = molar mass / empirical-formula mass.',
'Nitrogen by Dumas: infer nitrogen amount from corrected N₂ gas volume. Subtract water vapour pressure when gas is collected over water; use consistent units in PV = nRT.',
'Kjeldahl estimates nitrogen converted to ammonium, then relates liberated ammonia to acid equivalents. It is not applicable unchanged to nitro, azo or ring-bound nitrogen compounds.',
'Halogens by Carius: relate AgX mass to halogen fraction M(X)/M(AgX). Sulfur as BaSO₄ uses 32/M(BaSO₄); phosphorus can be estimated through a weighed phosphate product.',
'Main includes qualitative/quantitative organic analysis and empirical/molecular formula calculations. Advanced explicitly limits its basic-principles formula determination to combustion.']),
S('functional','Functional-group tests',[],{table:T(['Group','Diagnostic idea','Caution'],[['Alcohol','Lucas / oxidation pattern / ester formation','Degree and substrate change response'],['Phenol','Neutral FeCl₃ complex; bromine-water substitution','Colour is structure-dependent'],['Carbonyl','2,4-DNPH derivative','Does not distinguish aldehyde/ketone'],['Aldehyde','Tollens; often Fehling for aliphatic aldehydes','Reducing sugars and α-hydroxy ketones complicate inference'],['Carboxyl','CO₂ effervescence with NaHCO₃','Strongly acidic other groups may also react'],['Primary amine','Carbylamine; diazotization/coupling if aromatic','Secondary/tertiary negative in carbylamine'],['Amine degree','Hinsberg solubility behaviour','Use the whole acid/base sequence'],['Nitro (Advanced)','Reduction to an amine then appropriate confirmation; standard reduction-based tests','A standalone colour or precipitate is not unique evidence'],['Unsaturation','Bromine / dilute alkaline KMnO₄ consumption','Other oxidizable/activated groups can interfere']]),links:['carbonyls:tests','amines:reactions','alcohols:alcohol-reactions']}),
S('preparations','Required preparation chemistry',[
'Acetanilide: acetylate aniline at nitrogen using an appropriate acetylating reagent. The amide protects NH₂ and reduces ring activation.',
'p-Nitroacetanilide: controlled nitration of acetanilide gives a para-rich product because the protected amino group remains ortho/para directing and para is less hindered.',
'Aniline yellow: azo coupling between benzenediazonium and aniline gives p-aminoazobenzene under suitable coupling conditions.',
'Iodoform: a methyl ketone or appropriate oxidizable alcohol gives yellow CHI₃ under alkaline iodine conditions. This is the haloform transformation, not a general alcohol reaction.'],{reactionIds:['amine-acylation','azo-aniline','haloform'],links:['diazonium:coupling']}),
S('traps','Interpretation & scope',[
'A positive qualitative test narrows possibilities; a sequence of compatible tests is needed to establish a functional group reliably.',
'This chapter covers the organic portion of practical chemistry. The separate inorganic salt analysis, titration, calorimetry and colloid experiments in Main belong outside this organic reference.',
'Laboratory entries are for examination recall and interpretation; no quantities or hands-on procedures are supplied.'],{kind:'exception'})],checklist:['Select a purification method','Use Rf with matched conditions','Explain reduced-pressure and steam distillation','Interpret melting-range evidence','Recall fusion species for N/S/X','Recall nitrogen and sulfur observations','Handle combined N/S interference','Explain acid pretreatment for halide test','Distinguish AgCl/AgBr/AgI observations','Compute C/H from combustion masses','Find empirical and molecular formulas','Correct wet gas in Dumas analysis','Recall Kjeldahl limitations','Use gravimetric mass ratios','Choose appropriate functional-group tests','Recognize false-positive possibilities','Recall four required organic preparation transformations']}
];
