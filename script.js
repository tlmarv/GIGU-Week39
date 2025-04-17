// Quiz Data
const quizData = [
  {
    "question": "A 23-year-old man presents to the emergency department with 12 hours of abdominal pain. He initially noticed a dull ache around his umbilicus, which later localized to the right lower quadrant. On physical examination, he has rebound tenderness at McBurney’s point. Which of the following best explains the shift in pain location?",
    "choices": [
      "Increased intra-abdominal pressure compressing the ileocolic artery",
      "Stimulation of somatic sensory nerves supplying the parietal peritoneum",
      "Obstruction of appendicular venous outflow leading to ischemia",
      "Activation of visceral afferent fibers from S2–S4 pelvic splanchnics",
      "Inflammation of Peyer’s patches with lymphoid hyperplasia"
    ],
    "correctAnswer": 1,
    "explanation": "Initial appendicitis pain is referred to the periumbilical region due to visceral afferents following sympathetic fibers to T10. As the inflammation spreads to involve the parietal peritoneum, which is innervated by somatic sensory nerves, the pain becomes localized to the right lower quadrant at McBurney’s point. (A) Arterial compression is not the cause of referred pain. (B) Correct – Parietal peritoneum pain is sharp and localized due to somatic innervation. (C) Venous outflow impairment may worsen inflammation but doesn’t explain pain shift. (D) S2–S4 innervates hindgut; appendix is midgut (T10). (E) Peyer’s patches may be inflamed but not the direct cause of referred somatic pain."
  },
  {
    "question": "A surgeon is performing a bowel resection and observes a segment of small intestine with dense plicae circulares, few arterial arcades, and long vasa recta. Which of the following segments of bowel is most likely being resected?",
    "choices": [
      "Duodenum",
      "Proximal jejunum",
      "Terminal ileum",
      "Cecum",
      "Ascending colon"
    ],
    "correctAnswer": 1,
    "explanation": "The jejunum is characterized by few large arterial arcades, long vasa recta, less mesenteric fat, and dense plicae circulares, which increase surface area for absorption. This distinguishes it from the ileum, which has more arcades, shorter vasa recta, and sparse plicae. (A) Duodenum is retroperitoneal and has a different vascular pattern. (B) Correct – Classic vascular and mucosal features of the proximal jejunum. (C) Terminal ileum has many arcades, short vasa recta, and sparse plicae. (D) Cecum is part of the large intestine. (E) Ascending colon has teniae coli and haustra, not plicae circulares."
  },
  {
    "question": "A 68-year-old man undergoes a left hemicolectomy for colorectal cancer. Postoperative imaging reveals ischemia at the splenic flexure. Which of the following anastomoses was most likely inadequate in maintaining perfusion to this region?",
    "choices": [
      "Ileocolic artery to appendicular artery",
      "Right colic artery to middle colic artery",
      "Middle colic artery to left colic artery via the marginal artery",
      "Superior rectal artery to inferior rectal artery",
      "Sigmoid arteries to the superior rectal artery"
    ],
    "correctAnswer": 2,
    "explanation": "The splenic flexure is a classic watershed area at the junction of the SMA (middle colic artery) and IMA (left colic artery) territories. The marginal artery of Drummond forms the collateral path. Ischemia here suggests failure of this anastomosis. (A) Ileocolic and appendicular arteries supply the cecum and appendix, not splenic flexure. (B) This anastomosis is more proximal and wouldn’t affect the splenic flexure. (C) Correct – Middle colic (SMA) and left colic (IMA) meet at the splenic flexure. (D) These arteries supply the rectum, not the splenic flexure. (E) These supply more distal sigmoid and rectal areas."
  },
  {
    "question": "A newborn is diagnosed with DiGeorge syndrome due to a microdeletion on chromosome 22q11.2. Physical exam reveals hypocalcemia and frequent infections. These findings are most directly explained by maldevelopment of which embryologic structures?",
    "choices": [
      "First and second pharyngeal arches",
      "Third and fourth pharyngeal pouches",
      "Second and third pharyngeal clefts",
      "Fourth and sixth pharyngeal arches",
      "First pharyngeal groove and pouch"
    ],
    "correctAnswer": 1,
    "explanation": "DiGeorge syndrome results from failed development of the third and fourth pharyngeal pouches. The third pouch gives rise to the thymus and inferior parathyroid glands, while the fourth gives rise to the superior parathyroids and the ultimobranchial body. Hypocalcemia results from parathyroid aplasia, and T-cell deficiency arises due to thymic hypoplasia. (A) The first and second arches are involved in facial structures and are not responsible for immune or calcium regulation. (C) Pharyngeal clefts are external structures and don’t form glands. (D) These arches contribute to laryngeal cartilage and muscle but not glands. (E) The first groove and pouch form the ear structures, not parathyroid or thymus."
  },
  {
    "question": "A 4-year-old boy presents with a painless, slowly enlarging mass located just anterior to the sternocleidomastoid muscle. It is non-tender and soft. There is no history of trauma or infection. Which of the following embryologic structures most likely failed to regress properly?",
    "choices": [
      "Thyroglossal duct",
      "Second pharyngeal pouch",
      "Cervical sinus",
      "First pharyngeal membrane",
      "Ultimobranchial body"
    ],
    "correctAnswer": 2,
    "explanation": "A cervical (branchial) cyst is typically found anterior to the sternocleidomastoid muscle and results from persistence of the cervical sinus, which normally obliterates as the neck develops. (A) Thyroglossal duct cysts are midline, not lateral. (B) The second pouch forms the palatine tonsils; persistence alone wouldn’t cause a lateral neck cyst. (D) The first membrane forms the tympanic membrane and doesn’t contribute to neck masses. (E) The ultimobranchial body contributes to thyroid parafollicular cells, not cyst formation."
  },
  {
    "question": "A 3-month-old infant is noted to have micrognathia, glossoptosis, and cleft palate. Genetic workup is negative. These findings are most consistent with which of the following developmental syndromes, and what is its embryologic origin?",
    "choices": [
      "Treacher Collins syndrome; failed migration of neural crest cells into the first arch",
      "DiGeorge syndrome; failure of 2nd and 3rd pharyngeal clefts to obliterate",
      "Pierre Robin sequence; failed endodermal differentiation in the second pouch",
      "Goldenhar syndrome; failed regression of the thyroglossal duct",
      "Macroglossia; excessive myoblast migration from occipital somites"
    ],
    "correctAnswer": 0,
    "explanation": "The combination of micrognathia, glossoptosis, and cleft palate is classic for Pierre Robin sequence, which results from underdevelopment of the first pharyngeal arch. The primary defect is insufficient migration of neural crest cells into the first arch. Treacher Collins syndrome also involves first arch development and may show similar features. (B) DiGeorge syndrome affects 3rd and 4th pouches. (C) Pierre Robin involves the first arch, not the second pouch. (D) Goldenhar involves multiple anomalies including the first and second arches, but glossoptosis and cleft palate are not specific features. (E) Macroglossia is unrelated to first arch development and doesn’t explain micrognathia."
  },
  {
    "question": "A 2-day-old male newborn presents with persistent bilious vomiting and upper abdominal distension. Prenatal ultrasound had shown polyhydramnios. Abdominal radiograph reveals a 'double bubble' sign with no gas seen in the distal intestines. Which of the following best explains the underlying embryologic defect?",
    "choices": [
      "Incomplete recanalization of the jejunum",
      "Abnormal rotation of the midgut",
      "Failure of the duodenum to recanalize after epithelial proliferation",
      "Persistence of the vitelline duct",
      "Failure of neural crest cells to populate the myenteric plexus"
    ],
    "correctAnswer": 2,
    "explanation": "This is a classic presentation of congenital duodenal atresia, marked by bilious vomiting shortly after birth and the double bubble sign on imaging. It results from failure of the duodenum to recanalize during development. (A) Jejunal obstruction typically shows more distal gas. (B) Malrotation leads to volvulus but not this specific radiologic pattern. (D) Persistence of the vitelline duct leads to Meckel’s diverticulum. (E) Failure of neural crest cell migration causes Hirschsprung disease, affecting the colon."
  },
  {
    "question": "A 3-week-old infant is brought to the clinic with projectile, non-bilious vomiting after feeding. Physical examination reveals a firm, mobile, 'olive-like' mass in the epigastric region. Which of the following best describes the pathogenesis of this condition?",
    "choices": [
      "Incomplete separation of the esophagus and trachea",
      "Hypertrophy of the pyloric sphincter muscle",
      "Failure of the duodenum to become retroperitoneal",
      "Persistent vitelline duct remnant causing gastric outflow obstruction",
      "Failure of the foregut to rotate 90 degrees clockwise"
    ],
    "correctAnswer": 1,
    "explanation": "This describes congenital hypertrophic pyloric stenosis, which results from hypertrophy of the circular muscle in the pylorus, leading to gastric outlet obstruction. (A) Describes tracheoesophageal fistula, not vomiting. (C) Affects positioning but not obstruction. (D) Vitelline duct persistence leads to Meckel’s diverticulum, not obstruction. (E) Stomach rotation does not directly cause pyloric obstruction."
  },
  {
    "question": "A 5-day-old male infant fails to pass meconium and develops progressive abdominal distension. Imaging reveals massively dilated colon proximal to a narrowed distal segment. Biopsy of the rectal wall shows absence of ganglion cells in the submucosal and myenteric plexuses. Which of the following embryologic events most likely failed?",
    "choices": [
      "Recanalization of the rectum",
      "Descent of the cecum",
      "Migration of neural crest cells into the hindgut",
      "Partitioning of the cloaca by the urorectal septum",
      "Formation of the pectinate line"
    ],
    "correctAnswer": 2,
    "explanation": "This is Hirschsprung disease, or congenital aganglionic megacolon, due to failure of neural crest cell migration into the hindgut. Without ganglia, peristalsis is impaired. (A) Recanalization defects cause atresia or stenosis. (B) Descent of the cecum relates to colon positioning. (D) Cloacal partitioning errors result in fistulas or atresia. (E) Pectinate line forms normally in this case."
  },
{
  "question": "A newborn is noted to have micrognathia, glossoptosis, and a U-shaped cleft palate. He experiences feeding difficulties and occasional episodes of cyanosis. Which of the following embryologic processes is most likely disrupted in this patient?",
  "choices": [
    "Neural crest migration into the second pharyngeal arch",
    "Mesodermal proliferation in the sixth pharyngeal arch",
    "Neural crest migration into the first pharyngeal arch",
    "Apoptosis of ectodermal clefts between the arches",
    "Fusion of the medial and lateral nasal prominences"
  ],
  "correctAnswer": 2,
  "explanation": "Pierre Robin sequence is characterized by micrognathia (small mandible), glossoptosis (posteriorly placed tongue), and cleft palate. These findings result from **disruption of first pharyngeal arch development**, which relies on **neural crest cell migration**. The sequence of defects arises due to the mandibular hypoplasia, which prevents proper tongue descent and palate fusion. (A) The second arch contributes to facial expression muscles but not the mandible. (B) Sixth arch contributes to laryngeal structures. (D) Clefts are involved in external features; this is a deep mesenchymal defect. (E) Nasal prominences form the upper lip and nose, not mandible or palate."
},
{
  "question": "A 2-week-old infant is born with mandibular hypoplasia, malformed external ears, downward slanting palpebral fissures, and conductive hearing loss. Genetic analysis reveals a mutation affecting neural crest cell proliferation. This patient’s craniofacial abnormalities are primarily due to maldevelopment of which of the following pharyngeal arches?",
  "choices": [
    "First only",
    "Second only",
    "First and second",
    "Third and fourth",
    "Fourth and sixth"
  ],
  "correctAnswer": 2,
  "explanation": "Treacher Collins syndrome (mandibulofacial dysostosis) involves mutations affecting neural crest cell development, leading to malformation of structures derived from the **first and second pharyngeal arches**. These include bones of the face and middle ear, muscles of mastication and facial expression, and components of the external and middle ear. (A) First arch contributes to mandible and maxilla, but ear and facial muscles involve second arch. (B) Second arch affects facial expression and ear formation but not mandible. (D) Third and fourth arches form parts of hyoid and larynx, not face. (E) Fourth and sixth are involved in laryngeal structures and do not affect midface anatomy."
},
  {
    "question": "A 67-year-old woman presents with macrocytic anemia, paresthesias in her feet, and a positive Romberg sign. Laboratory studies reveal elevated levels of both homocysteine and methylmalonic acid. Which of the following is the most likely underlying cause of these findings?",
    "choices": [
      "Folic acid deficiency",
      "Vitamin B6 deficiency",
      "Vitamin B12 deficiency",
      "Vitamin C deficiency",
      "Iron deficiency anemia"
    ],
    "correctAnswer": 2,
    "explanation": "Vitamin B12 deficiency impairs the conversion of homocysteine to methionine and methylmalonyl-CoA to succinyl-CoA, leading to elevations in both homocysteine and methylmalonic acid. Neurological symptoms (paresthesias, proprioceptive loss) are also characteristic. (A) Folic acid deficiency leads to elevated homocysteine but not methylmalonic acid. (B) B6 deficiency impairs homocysteine clearance but not methylmalonic acid metabolism. (D) Vitamin C deficiency causes scurvy, not macrocytic anemia or neurological symptoms. (E) Iron deficiency leads to microcytic anemia."
  },
  {
    "question": "A 60-year-old homeless man with a history of alcohol use disorder presents with confusion, ataxia, and horizontal nystagmus. He is given a dextrose-containing IV fluid before thiamine administration. Hours later, he deteriorates and becomes comatose. This outcome most likely resulted from impaired activity of which of the following enzymes?",
    "choices": [
      "Methionine synthase",
      "Transketolase",
      "Methylmalonyl-CoA mutase",
      "Cystathionine beta-synthase",
      "Dihydrofolate reductase"
    ],
    "correctAnswer": 1,
    "explanation": "Thiamine (vitamin B1) is a cofactor for transketolase, an enzyme in the pentose phosphate pathway. In Wernicke's encephalopathy, precipitated by glucose administration without thiamine, the deficiency in thiamine worsens, impairing carbohydrate metabolism and leading to lactic acidosis and neurotoxicity. (A) Methionine synthase requires B12. (C) Methylmalonyl-CoA mutase also requires B12. (D) CBS uses B6 as cofactor. (E) Dihydrofolate reductase is inhibited by methotrexate, not affected by thiamine."
  },
  {
    "question": "A 2-year-old child is brought in with seizures, developmental delay, alopecia, and a red scaly rash around the eyes and mouth. Her urine has a strong odor. Genetic testing reveals a deficiency of biotinidase. Which of the following metabolic processes is most directly impaired in this child?",
    "choices": [
      "Hydroxylation of proline and lysine residues",
      "Carboxylation of pyruvate to oxaloacetate",
      "Decarboxylation of α-ketoglutarate",
      "Transamination of amino acids",
      "Methylation of homocysteine"
    ],
    "correctAnswer": 1,
    "explanation": "Biotin (vitamin B7) is required for carboxylation reactions, such as the conversion of pyruvate to oxaloacetate via pyruvate carboxylase. Biotinidase deficiency leads to multiple carboxylase deficiency. (A) Hydroxylation reactions use vitamin C. (C) Decarboxylation of α-ketoglutarate uses thiamine. (D) Transamination requires B6. (E) Homocysteine methylation needs B12 and folate."
  },
  {
    "question": "A 58-year-old man with newly diagnosed tuberculosis begins isoniazid therapy. Four weeks later, he complains of numbness and tingling in his hands and feet. Which of the following best explains the mechanism of his symptoms?",
    "choices": [
      "Inhibition of collagen synthesis",
      "Depletion of thiamine from excessive urinary loss",
      "Drug-induced antagonism of pyridoxal phosphate",
      "Inhibition of methionine synthase",
      "Antagonism of folate absorption in the intestine"
    ],
    "correctAnswer": 2,
    "explanation": "Isoniazid forms a hydrazone with pyridoxal phosphate (active B6), reducing its availability and leading to neuropathy. B6 is required for neurotransmitter synthesis. (A) This describes vitamin C deficiency. (B) Thiamine is not the primary vitamin affected by INH. (D) Methionine synthase is a B12-dependent enzyme. (E) Folate antagonism occurs with methotrexate or sulfa drugs, not INH."
  },
  {
    "question": "A 5-year-old boy presents with chronic constipation and abdominal distension. A barium enema reveals a narrow distal colon with a dilated segment proximally. Biopsy of the affected region reveals absence of ganglion cells in both the myenteric and submucosal plexuses. Which of the following embryologic processes most likely failed in this patient?",
    "choices": [
      "Apoptosis of intestinal epithelial stem cells",
      "Migration of neural crest cells into the hindgut",
      "Development of Brunner glands in the duodenum",
      "Differentiation of M cells in Peyer’s patches",
      "Involution of the vitelline duct"
    ],
    "correctAnswer": 1,
    "explanation": "This child has Hirschsprung disease (congenital aganglionic megacolon), caused by failure of neural crest cells to migrate into the wall of the distal colon. The absence of ganglia in the enteric nervous system results in lack of peristalsis and functional obstruction. (A) Stem cell apoptosis is not the cause. (C) Brunner glands are in the duodenum. (D) M cells are involved in antigen sampling, not peristalsis. (E) Vitelline duct remnants cause Meckel’s diverticulum, not colonic obstruction."
  },
  {
    "question": "A 40-year-old woman presents with chronic diarrhea and weight loss. Duodenal biopsy shows blunting of villi and lymphocytic infiltration of the lamina propria. Which of the following best explains her malabsorptive symptoms?",
    "choices": [
      "Loss of Paneth cell-mediated IgA secretion",
      "Loss of enterocyte brush border enzymes",
      "Overactivity of Brunner’s glands",
      "Reduced M cell-mediated antigen transport",
      "Defective enteroendocrine signaling"
    ],
    "correctAnswer": 1,
    "explanation": "Celiac disease damages enterocytes in the small intestine, especially in the duodenum, leading to villous atrophy and decreased activity of brush border enzymes. This results in malabsorption. (A) Paneth cells contribute to innate immunity, not enzyme secretion. (C) Brunner’s glands secrete alkaline mucus and are not overactive in celiac disease. (D) M cells function in immune surveillance. (E) Enteroendocrine cells regulate motility and secretion but are not the primary defect in celiac disease."
  },
  {
    "question": "A 28-year-old man presents with intermittent abdominal pain, non-bloody diarrhea, and weight loss. Ileocolonoscopy reveals skip lesions and transmural inflammation. Histology shows lymphoid aggregates extending through all layers of the bowel wall. Which of the following histological features best distinguishes this condition from ulcerative colitis?",
    "choices": [
      "Crypt abscesses in the mucosa",
      "Goblet cell depletion",
      "Lamina propria lymphocytosis",
      "Transmural inflammation with granulomas",
      "Submucosal fibrosis"
    ],
    "correctAnswer": 3,
    "explanation": "Crohn disease is characterized by transmural inflammation, non-caseating granulomas, and skip lesions—features not found in ulcerative colitis. (A) Crypt abscesses are seen in ulcerative colitis. (B) Goblet cell depletion is also typical of UC. (C) Lymphocytic infiltration of the lamina propria is seen in both conditions. (D) Correct – granulomatous, full-thickness inflammation is unique to Crohn disease. (E) Submucosal fibrosis may occur in both but is not diagnostic."
  },
  {
    "question": "A 34-year-old man presents with chronic diarrhea, weight loss, and intermittent right lower quadrant pain. Endoscopy reveals areas of normal mucosa alternating with inflamed mucosa throughout the terminal ileum and colon. Biopsy reveals transmural inflammation with noncaseating granulomas and crypt distortion. Which of the following additional findings is most likely in this patient?",
    "choices": [
      "Fistula between bowel and bladder",
      "Pseudopolyps and continuous inflammation from the rectum",
      "Eosinophilic infiltration of submucosa",
      "Perianal abscess due to Candida infection",
      "Goblet cell depletion in the small intestine"
    ],
    "correctAnswer": 0,
    "explanation": "This is classic Crohn disease, characterized by transmural inflammation, noncaseating granulomas, and skip lesions. Fistula formation (e.g., enterovesical) is a hallmark due to deep ulceration and full-thickness wall involvement. (A) Correct. (B) Describes ulcerative colitis. (C) Eosinophilic enteritis is not typical of Crohn. (D) Perianal abscesses are common but not due to Candida. (E) Goblet cells are typically preserved in Crohn, but depleted in UC."
  },
  {
    "question": "A 71-year-old man presents with painless lower GI bleeding. He denies weight loss or recent changes in bowel habits. Colonoscopy reveals multiple dilated submucosal vessels in the right colon. Which of the following best explains the pathogenesis of this condition?",
    "choices": [
      "Failure of apoptosis in intestinal crypts",
      "Vascular occlusion by cholesterol emboli",
      "Formation of arteriovenous malformations from increased wall stress",
      "Infiltration of lamina propria by foamy macrophages",
      "Infarction of the splenic flexure from low flow state"
    ],
    "correctAnswer": 2,
    "explanation": "This is angiodysplasia, a common vascular abnormality in elderly patients, especially in the right colon. It results from intermittent obstruction of venous drainage with continued arterial inflow, leading to arteriovenous malformations. (A) Apoptosis failure is not implicated. (B) Cholesterol emboli affect small vessels systemically. (C) Correct. (D) Describes Whipple disease. (E) Ischemic colitis affects the splenic flexure with pain, not painless bleeding."
  },
  {
    "question": "A 42-year-old woman presents with chronic diarrhea and a blistering rash on her elbows. Labs reveal microcytic anemia and elevated transaminases. Duodenal biopsy shows villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis. Which of the following is most specific for confirming the underlying diagnosis?",
    "choices": [
      "Anti-nuclear antibodies",
      "Anti-mitochondrial antibodies",
      "Anti-Saccharomyces cerevisiae antibodies",
      "Anti-tissue transglutaminase (tTG) IgA",
      "Anti-double stranded DNA antibodies"
    ],
    "correctAnswer": 3,
    "explanation": "This patient has celiac disease, supported by histologic findings and dermatitis herpetiformis. Anti-tTG IgA is the most specific serologic marker. (A) ANA is nonspecific and seen in lupus. (B) Anti-mitochondrial antibodies suggest PBC. (C) ASCA is seen in Crohn disease. (D) Correct. (E) Anti-dsDNA is specific for SLE."
  },
  {
    "question": "A 28-year-old woman presents with chronic constipation and bloating. She has tried fiber supplements and over-the-counter laxatives without success. She is started on a new medication that activates guanylate cyclase-C on the luminal surface of intestinal epithelial cells. This leads to increased intracellular cGMP, stimulating chloride and bicarbonate secretion via the CFTR channel and accelerating intestinal transit. Which of the following drugs was most likely prescribed?",
    "choices": [
      "Lubiprostone",
      "Bisacodyl",
      "Linaclotide",
      "Docusate sodium",
      "Loperamide"
    ],
    "correctAnswer": 2,
    "explanation": "Linaclotide is a guanylate cyclase-C agonist that increases cGMP, activating the CFTR chloride channel, thereby enhancing secretion and motility. It is FDA-approved for IBS-C and chronic idiopathic constipation. (A) Lubiprostone activates ClC-2 channels, not guanylate cyclase. (B) Bisacodyl is a stimulant laxative acting on enteric nerves. (D) Docusate is a stool softener (emollient). (E) Loperamide is an anti-diarrheal, not used for constipation."
  },
  {
    "question": "A 33-year-old man with a new diagnosis of ulcerative colitis is started on first-line treatment for long-term maintenance of remission. He is given a drug that acts locally in the colon to reduce leukocyte chemotaxis and decrease synthesis of inflammatory mediators including platelet-activating factor and leukotrienes. Which of the following drugs has this mechanism of action and is most appropriate for mild to moderate disease?",
    "choices": [
      "Infliximab",
      "Mesalamine",
      "Azathioprine",
      "Methotrexate",
      "Prednisone"
    ],
    "correctAnswer": 1,
    "explanation": "Mesalamine (5-ASA) is a first-line agent for mild to moderate ulcerative colitis. It works by inhibiting leukocyte chemotaxis and inflammatory mediators in the colonic mucosa. (A) Infliximab is a TNF-α inhibitor used in moderate-to-severe cases. (C) Azathioprine is an immunosuppressant for maintenance after steroid induction. (D) Methotrexate is more commonly used in Crohn’s disease. (E) Prednisone is used for acute flares, not long-term maintenance."
  },
  {
    "question": "A 70-year-old man with end-stage cancer is receiving chronic opioid therapy and now presents with severe constipation unresponsive to conventional laxatives. He is started on a drug that selectively antagonizes peripheral μ-opioid receptors without affecting central analgesia. Within hours, he experiences bowel movements but also reports abdominal pain. Which of the following drugs was most likely administered?",
    "choices": [
      "Loperamide",
      "Naloxegol",
      "Bisacodyl",
      "Psyllium",
      "Polyethylene glycol"
    ],
    "correctAnswer": 1,
    "explanation": "Naloxegol is a peripherally acting μ-opioid receptor antagonist used to treat opioid-induced constipation. It does not cross the blood-brain barrier, so analgesia is preserved. (A) Loperamide is an anti-diarrheal opioid agonist. (C) Bisacodyl is a stimulant laxative. (D) Psyllium is a bulk-forming laxative. (E) Polyethylene glycol is an osmotic laxative but may be insufficient in opioid-induced constipation."
  },
  {
    "question": "A 66-year-old man with a history of alcohol use disorder presents with new-onset confusion, horizontal nystagmus, and an ataxic gait. He is lethargic and requires hospitalization. Labs show elevated transketolase activity after thiamine administration. Which of the following enzymes most directly requires the deficient cofactor in this patient?",
    "choices": [
      "Methylmalonyl-CoA mutase",
      "Pyruvate carboxylase",
      "Homocysteine methyltransferase",
      "Branched-chain α-ketoacid dehydrogenase",
      "Acetyl-CoA carboxylase"
    ],
    "correctAnswer": 3,
    "explanation": "The patient presents with Wernicke encephalopathy due to thiamine (vitamin B1) deficiency. Branched-chain α-ketoacid dehydrogenase is one of several enzymes that require thiamine pyrophosphate (TPP) as a cofactor. Others include pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, and transketolase. (A) Methylmalonyl-CoA mutase requires B12. (B) Pyruvate carboxylase requires biotin. (C) Homocysteine methyltransferase requires B12. (E) Acetyl-CoA carboxylase requires biotin."
  },
  {
    "question": "A 30-year-old vegan woman presents with fatigue, paresthesias, and difficulty walking. CBC shows macrocytic anemia and hypersegmented neutrophils. Serum methylmalonic acid and homocysteine levels are both elevated. Which of the following best explains her condition?",
    "choices": [
      "Defective enterohepatic recycling of folate",
      "Inadequate intake of vitamin B12",
      "Autoimmune gastritis with anti-PSMA antibodies",
      "Excess dietary avidin consumption",
      "Pyridoxine-inactivating medication use"
    ],
    "correctAnswer": 1,
    "explanation": "The elevated methylmalonic acid and neurologic symptoms point to vitamin B12 deficiency. A strict vegan diet is a known risk factor. (A) Enterohepatic recycling is relevant but not the primary issue. (C) Pernicious anemia involves anti-intrinsic factor or antiparietal cell antibodies, not PSMA. (D) Avidin binds biotin, not B12. (E) Pyridoxine-inactivating drugs affect vitamin B6, not B12."
  },
  {
    "question": "A 5-month-old infant presents with seizures unresponsive to anticonvulsants, developmental delay, and a scaly rash around the mouth and eyes. Urine has a strong odor. Serum analysis reveals elevated propionyl-CoA and 3-hydroxyisovaleric acid. Which of the following enzyme deficiencies best explains the findings?",
    "choices": [
      "Biotinidase deficiency",
      "Cystathionine β-synthase deficiency",
      "Dihydrofolate reductase deficiency",
      "Thiamine pyrophosphate deficiency",
      "Glycine cleavage system defect"
    ],
    "correctAnswer": 0,
    "explanation": "The presentation is consistent with multiple carboxylase deficiency due to biotinidase deficiency. This impairs biotin recycling and affects carboxylase enzymes including propionyl-CoA carboxylase, explaining the metabolic findings. (B) CBS deficiency causes homocystinuria, not this profile. (C) DHFR deficiency mimics folate deficiency. (D) Thiamine deficiency does not cause these organic acidemias. (E) Glycine cleavage system defect is associated with nonketotic hyperglycinemia."
  },
  {
    "question": "A 3-year-old boy is brought to the emergency department with 2 days of abdominal pain, bloody diarrhea, and fatigue. He appears pale and lethargic. Laboratory studies reveal microangiopathic hemolytic anemia, thrombocytopenia, and elevated serum creatinine. Which of the following organisms is most likely responsible for this patient’s condition, and what test would best support the diagnosis?",
    "choices": [
      "Enterotoxigenic E. coli (ETEC); stool culture on MacConkey agar",
      "Shigella sonnei; positive Widal agglutination test",
      "Enterohemorrhagic E. coli (EHEC); inability to ferment sorbitol",
      "Campylobacter jejuni; oxidase-positive curved rods",
      "Vibrio cholerae; growth on thiosulfate-citrate-bile salts-sucrose agar"
    ],
    "correctAnswer": 2,
    "explanation": "This child presents with the classic triad of hemolytic-uremic syndrome (HUS): hemolytic anemia, thrombocytopenia, and acute kidney injury. The most common cause is Shiga toxin-producing E. coli, especially O157:H7. These strains do not ferment sorbitol and can be identified on sorbitol-MacConkey agar. (A) ETEC causes watery, non-bloody diarrhea. (B) Shigella causes dysentery, but HUS is more commonly linked to Shiga-toxin-producing E. coli. (D) Campylobacter causes inflammatory diarrhea but not typically HUS. (E) V. cholerae causes profuse watery diarrhea, not bloody or associated with HUS.)"
  },
  {
    "question": "A 68-year-old hospitalized woman develops profuse watery diarrhea 5 days after starting clindamycin for a dental abscess. She becomes febrile and hypotensive. Colonoscopy reveals yellow-white plaques adherent to the colonic mucosa. Which of the following best describes the most likely pathogenesis of her condition?",
    "choices": [
      "Invasion of enterocytes leading to mucosal necrosis",
      "Production of heat-labile and heat-stable enterotoxins",
      "Glycosylation of Rho GTPases leading to cytoskeletal disruption",
      "Direct stimulation of adenylate cyclase via GM1 ganglioside receptor",
      "Endotoxin-mediated activation of TLR-4 receptors"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has classic pseudomembranous colitis caused by Clostridioides difficile. The toxins TcdA and TcdB glycosylate and inactivate Rho GTPases, leading to cytoskeletal disruption, mucosal apoptosis, and inflammation. (A) Invasion is characteristic of organisms like Shigella or EIEC. (B) Heat-labile and stable toxins are produced by ETEC. (D) Describes cholera toxin mechanism. (E) Endotoxin (LPS) triggers sepsis, not C. difficile pathology."
  },
  {
    "question": "A 25-year-old man returns from Southeast Asia with a 10-day history of fever, malaise, and abdominal discomfort. He reports constipation and a pink maculopapular rash on his trunk. On physical exam, his heart rate is 58/min despite a fever of 39.8°C (103.6°F). Blood cultures are pending. Which of the following is the most likely causative agent?",
    "choices": [
      "Shigella dysenteriae",
      "Enteroinvasive E. coli",
      "Salmonella Typhi",
      "Campylobacter jejuni",
      "Yersinia enterocolitica"
    ],
    "correctAnswer": 2,
    "explanation": "This is a classic case of typhoid fever caused by Salmonella Typhi. Features include stepladder fever, relative bradycardia, rose spots, constipation, and hepatosplenomegaly. (A) Shigella causes acute dysentery. (B) EIEC causes bloody diarrhea, not typhoid fever. (D) Campylobacter causes diarrhea and RLQ pain, not prolonged fever with bradycardia. (E) Yersinia can mimic appendicitis but does not cause typhoid syndrome.)"
  },
  {
    "question": "A 24-year-old woman presents with fatigue, abdominal bloating, chronic loose stools, and a pruritic rash on her elbows. She has a history of secondary amenorrhea and 20-pound weight loss over 3 years. Exam reveals pale skin, spoon-shaped nails, and decreased vibratory sensation in her feet. Lab studies show microcytic anemia, low serum iron, elevated alkaline phosphatase, and hypocalcemia. Which of the following is the most likely diagnosis, and what is the most specific serologic marker for confirmation?",
    "choices": [
      "Crohn disease; anti-Saccharomyces cerevisiae antibodies (ASCA)",
      "Ulcerative colitis; perinuclear anti-neutrophil cytoplasmic antibodies (p-ANCA)",
      "Celiac disease; anti–tissue transglutaminase IgA antibodies",
      "Whipple disease; PAS-positive foamy macrophages in the lamina propria",
      "Giardiasis; stool ova and parasites showing flagellated protozoa"
    ],
    "correctAnswer": 2,
    "explanation": "This patient has classic celiac disease, as evidenced by iron deficiency anemia, malabsorption (diarrhea, weight loss), dermatitis herpetiformis, and neurologic symptoms. Celiac disease causes villous atrophy in the proximal small intestine, leading to iron and fat-soluble vitamin malabsorption. The most specific serologic marker is anti–tissue transglutaminase (tTG) IgA. (A) ASCA is more specific for Crohn disease. (B) p-ANCA is associated with UC. (D) Whipple disease shows PAS-positive macrophages but does not present with microcytic anemia or dermatitis. (E) Giardiasis is acute and not associated with autoimmunity or systemic complications.)"
  },
  {
    "question": "A 53-year-old woman with Crohn disease and prior gastric surgery presents with fatigue, gait instability, and diarrhea. Exam shows pallor, a red smooth tongue, and decreased vibration and proprioception in the lower limbs. Labs reveal macrocytic anemia, leukopenia, and thrombocytopenia. Which of the following best explains her neurologic and hematologic findings?",
    "choices": [
      "Zinc deficiency from mucosal inflammation",
      "Vitamin B6 deficiency due to sulfasalazine therapy",
      "Vitamin B12 malabsorption due to terminal ileum and gastric dysfunction",
      "Copper deficiency following extensive colonic resection",
      "Folate malabsorption from duodenal villous atrophy"
    ],
    "correctAnswer": 2,
    "explanation": "This patient's megaloblastic anemia and posterior column symptoms (ataxia, paresthesias) suggest vitamin B12 deficiency. Her history of gastric surgery (loss of intrinsic factor) and Crohn’s disease (terminal ileum involvement) compound the risk. (A) Zinc deficiency can cause taste disturbance and alopecia but not anemia/neuropathy. (B) B6 deficiency causes neuropathy but not macrocytosis. (C) Correct. (D) Copper deficiency is rare and more associated with myelopathy than anemia. (E) Folate deficiency causes macrocytosis but does not affect proprioception or vibration sense.)"
  },
  {
    "question": "A 62-year-old man with a history of ileal resection for ischemic bowel disease presents with chronic watery diarrhea. He had a second ileal resection for trauma 5 months ago. He now has foul-smelling, bulky stools, 14–18 times per day, and muscle cramps. Labs reveal steatorrhea and hypocalcemia. Which of the following best explains his current symptoms?",
    "choices": [
      "Chronic mesenteric ischemia leading to colonic dysmotility",
      "Fat and bile salt malabsorption due to extensive terminal ileum resection",
      "Short bowel syndrome due to loss of jejunal surface area",
      "Lactose intolerance triggered by bowel surgery",
      "Persistent Clostridium difficile infection"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has extensive terminal ileum resection, leading to bile salt and vitamin B12 malabsorption. The increased stool frequency, steatorrhea, and electrolyte imbalance are due to malabsorption of fats and fat-soluble vitamins (especially calcium and vitamin D). (A) Chronic ischemia would not cause these specific deficiencies. (B) Correct. (C) Jejunal loss causes carbohydrate malabsorption but not B12/fat malabsorption. (D) Lactose intolerance causes watery diarrhea, not steatorrhea. (E) No history of recent antibiotic use or pseudomembranous colitis.)"
  },
  {
    "question": "A 56-year-old man presents with 6 weeks of watery diarrhea. He reports 4–6 loose stools per day, including overnight episodes, without obvious triggers. He denies blood in the stool. On evaluation, the stool volume is 1.4 liters per day with pH of 8. A fasting trial shows no change in stool output. Which of the following best describes the mechanism of this patient’s diarrhea?",
    "choices": [
      "Osmotic diarrhea due to magnesium antacid ingestion",
      "Secretory diarrhea from bile acid malabsorption",
      "Functional diarrhea from irritable bowel syndrome",
      "Malabsorptive diarrhea from pancreatic insufficiency",
      "Inflammatory diarrhea from ulcerative colitis"
    ],
    "correctAnswer": 1,
    "explanation": "This is secretory diarrhea, indicated by high stool volume (>1L), high pH (>7), and persistence despite fasting. Bile acids or hormone-secreting tumors (e.g., VIPomas) are common causes. (A) Osmotic diarrhea improves with fasting and has a lower volume and pH <6. (C) IBS does not cause nocturnal diarrhea or high volume. (D) Pancreatic insufficiency causes steatorrhea, not typically large-volume watery stools. (E) UC causes bloody, inflammatory diarrhea with urgency and tenesmus.)"
  },
  {
    "question": "A 72-year-old man presents with sudden painless rectal bleeding and lightheadedness. He has a history of chronic constipation and low-fiber diet. His vitals reveal tachycardia and hypotension. Colonoscopy shows outpouchings of mucosa in the sigmoid colon, one of which has active bleeding. Which of the following is the most likely underlying pathophysiologic mechanism?",
    "choices": [
      "Apoptosis of intestinal epithelium due to ischemia",
      "Autoimmune destruction of colonic crypt cells",
      "Herniation of mucosa through weakened muscularis propria",
      "Infiltration of lymphocytes into lamina propria",
      "Transmural inflammation with crypt abscesses"
    ],
    "correctAnswer": 2,
    "explanation": "Diverticulosis involves outpouching of mucosa and submucosa through the muscularis propria due to increased intraluminal pressure and weakened wall integrity. Bleeding occurs when a penetrating vessel erodes. (A) Describes ischemic colitis. (B) Seen in autoimmune enteritis. (C) Correct – diverticula formation. (D) Lymphocytic infiltration is more typical of microscopic colitis. (E) Transmural inflammation with crypt abscesses is characteristic of Crohn disease.)"
  },
  {
    "question": "A 60-year-old woman is admitted for left lower quadrant abdominal pain, fever, and constipation. CT imaging shows focal colonic wall thickening with surrounding fat stranding but no evidence of abscess or perforation. Which of the following is the most appropriate next step in management?",
    "choices": [
      "Initiate high-fiber diet and oral fluids",
      "Begin IV antibiotics and monitor closely",
      "Immediate colonoscopy to assess extent of inflammation",
      "Emergency surgery with partial colectomy",
      "Administer loperamide and rehydrate"
    ],
    "correctAnswer": 1,
    "explanation": "This patient has acute uncomplicated diverticulitis (no perforation or abscess). IV antibiotics targeting colonic flora are first-line. (A) High-fiber diet is for prevention after resolution. (B) Correct – acute phase treatment. (C) Colonoscopy is contraindicated during active diverticulitis due to perforation risk. (D) Surgery is reserved for complications. (E) Loperamide is contraindicated in infectious or inflammatory diarrhea due to ileus risk.)"
  },
  {
    "question": "A 13-month-old infant presents with 3 days of fever, vomiting, and watery diarrhea. His stool is non-bloody and lacks fecal leukocytes. Stool antigen testing reveals presence of a viral inner capsid protein. The pathogenesis of this patient’s diarrhea most likely involves which of the following mechanisms?",
    "choices": [
      "Invasion of colonic mucosa by double-stranded RNA virus",
      "Lysis of enterocytes via adenoviral hexon protein",
      "Toxin-mediated chloride secretion and enteric nervous system activation",
      "Disruption of mitochondrial oxidative phosphorylation in villous cells",
      "Exfoliative toxin-induced cleavage of epithelial junctions"
    ],
    "correctAnswer": 2,
    "explanation": "This is classic rotavirus gastroenteritis, identified by detection of VP6 (inner capsid protein). Rotavirus causes villous atrophy, loss of brush border enzymes, and produces NSP4, a viral enterotoxin that promotes chloride secretion and activates the enteric nervous system. (A) Rotavirus infects small intestine, not colonic mucosa. (B) Adenovirus hexon protein is structural but not directly lytic. (C) Correct. (D) Mitochondrial dysfunction is not the primary mechanism. (E) Exfoliative toxin is seen in S. aureus scalded skin syndrome, not viral enteritis.)"
  },
  {
    "question": "A 7-year-old child presents with fever, painful oral lesions, and a vesicular rash on the palms and soles. Similar cases have been reported in the child’s school. Which of the following best describes the pathogen responsible for this illness and its key distinguishing features?",
    "choices": [
      "Astrovirus; associated with winter diarrhea outbreaks and nosocomial spread",
      "Enterovirus; transmitted via fecal-oral route and capable of causing exanthems and enanthems",
      "Calicivirus; highly infectious virus causing large foodborne outbreaks of gastroenteritis",
      "Adenovirus serogroup F; causes prolonged diarrhea with incubation of 2–3 days",
      "Herpes simplex virus type 1; latent infection reactivated by stress or sunlight"
    ],
    "correctAnswer": 1,
    "explanation": "This child has hand-foot-and-mouth disease, most commonly caused by Coxsackie A16 (an enterovirus). Enteroviruses can cause enanthems (herpangina), exanthems, and other systemic manifestations. (A) Astrovirus causes endemic diarrhea in children but no rash or mouth sores. (B) Correct. (C) Norovirus causes vomiting/diarrhea outbreaks, not mucocutaneous lesions. (D) Adenovirus serogroup F causes diarrhea, but not skin/mouth findings. (E) HSV-1 causes oral ulcers but not palm/sole rash.)"
  },
  {
    "question": "A 68-year-old man with HIV develops chronic watery diarrhea. Stool testing for bacterial, viral, and parasitic pathogens is negative. He is started on crofelemer. This medication most likely exerts its antidiarrheal effect via which of the following mechanisms?",
    "choices": [
      "Antagonism of opioid receptors in the intestinal mucosa",
      "Binding to guanylate cyclase-C receptors and CFTR activation",
      "Inhibition of cyclic AMP-mediated chloride secretion",
      "Destruction of enteric pathogens via bacteriostatic action",
      "Reduction of gut bacterial translocation via IgA induction"
    ],
    "correctAnswer": 2,
    "explanation": "Crofelemer is a botanical drug used for noninfectious diarrhea in HIV-positive patients. It inhibits the CFTR chloride channel and calcium-activated chloride channels, reducing chloride and water secretion. (A) Loperamide works via opioid receptors. (B) Linaclotide activates GC-C, used for constipation. (C) Correct. (D) Crofelemer has no antimicrobial action. (E) Crofelemer does not modulate mucosal IgA or microbial translocation.)"
  },
{
  "question": "A 27-year-old woman presents with fatigue, intermittent diarrhea, and a pruritic rash on her elbows. She also reports bloating and a 15-pound weight loss over the past year. Physical exam shows pale conjunctivae and excoriated vesicular lesions on the extensor surfaces of her arms. Duodenal biopsy reveals villous atrophy, crypt hyperplasia, and intraepithelial lymphocytosis. Which of the following best explains the mechanism underlying her disease?",
  "choices": [
    "Delayed-type hypersensitivity reaction to bacterial superantigen",
    "Activation of cytotoxic T cells by cross-reactive viral antigens",
    "Binding of deamidated gliadin peptides to HLA-DQ2/DQ8 and activation of CD4+ T cells",
    "Loss of tolerance due to absence of FOXP3+ regulatory T cells",
    "Antibody-mediated destruction of brush border enzymes via complement fixation"
  ],
  "correctAnswer": 2,
  "explanation": "Celiac disease is an immune-mediated enteropathy triggered by gluten ingestion in genetically predisposed individuals who express HLA-DQ2 or HLA-DQ8. Tissue transglutaminase modifies gliadin peptides via deamidation, enhancing their affinity for HLA-DQ2/DQ8 on antigen-presenting cells. This leads to CD4+ T cell activation and a Th1-mediated immune response, causing villous atrophy and crypt hyperplasia. (A) Describes toxic shock syndrome. (B) Suggests molecular mimicry, seen in post-infectious syndromes. (C) Correct. (D) FOXP3+ Tregs are involved in IPEX syndrome, not celiac disease. (E) Antibody-mediated damage occurs in autoimmune conditions but is not the primary mechanism in celiac disease.)"
},
  {
    "question": "A 35-year-old man with schizophrenia presents for a primary care visit. He has not seen a physician in several years and has a history of homelessness and substance use. He appears guarded, speaks minimally, and avoids eye contact. Which of the following physician actions best reflects a trauma-informed, patient-centered approach to care?",
    "choices": [
      "Speak primarily with the case manager to reduce patient discomfort",
      "Refer the patient to psychiatry before addressing primary care needs",
      "Use concrete, open-ended questions and affirm the patient’s efforts",
      "Order all recommended screenings and proceed quickly to avoid distress",
      "Reschedule the visit for a time when the patient is less guarded"
    ],
    "correctAnswer": 2,
    "explanation": "Trauma-informed care for patients with SMI involves using developmentally appropriate, concrete, open-ended questions (e.g., from the OARS framework), affirmations, and allowing extra response time. (A) reduces autonomy, (B) delays needed medical care, (C) is correct, (D) may overwhelm the patient, and (E) avoids engagement.)"
  },
  {
    "question": "A 29-year-old woman with a moderate intellectual disability is brought in by her caregiver for an annual physical exam. She is nonverbal and uses a communication board. The physician quickly interviews the caregiver and proceeds with a physical exam, despite the patient showing signs of distress. Which of the following best identifies the most significant error in this approach?",
    "choices": [
      "Failing to provide sedatives to reduce examination anxiety",
      "Neglecting to confirm insurance coverage for preventive services",
      "Proceeding with the exam without accommodating the patient’s communication needs",
      "Delaying urgent laboratory work-up for convenience",
      "Overprioritizing trauma-informed care over clinical assessment"
    ],
    "correctAnswer": 2,
    "explanation": "Patients with DD should have their communication tools respected and used in care. Trauma-informed and inclusive care requires patient engagement and consent when possible. (A) is not first-line, (B) is not a barrier here, (C) is correct, (D) is not applicable, (E) is incorrect; trauma-informed care supports clinical assessment, not hinders it.)"
  },
  {
    "question": "A physician is evaluating a 45-year-old man with schizoaffective disorder and poorly controlled diabetes. The physician attributes his fatigue and weight loss to psychiatric medications and does not order further work-up. Which of the following best describes this cognitive bias and its clinical consequence?",
    "choices": [
      "Anchoring bias; overestimation of cardiovascular risk",
      "Confirmation bias; excessive reliance on psychiatric input",
      "Diagnostic overshadowing; underdiagnosis of physical comorbidities",
      "Availability bias; overuse of emergency care services",
      "Premature closure; misattributing symptoms to medication adherence"
    ],
    "correctAnswer": 2,
    "explanation": "Diagnostic overshadowing occurs when physical symptoms are misattributed to a patient’s psychiatric diagnosis, a common barrier in SMI populations. (A) and (B) refer to other biases, (C) is correct, (D) relates to service usage, and (E) does not fully capture the misattribution.)"
  }
  ];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || new Array(quizData.length).fill(false);
let explanationsShown = JSON.parse(sessionStorage.getItem("explanationsShown")) || new Array(quizData.length).fill(false);
let selectedAnswers = JSON.parse(sessionStorage.getItem("selectedAnswers")) || new Array(quizData.length).fill(null);

// DOM Elements
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const explanationBox = document.getElementById("explanation");
const progressText = document.getElementById("progress");
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");
const questionList = document.getElementById("question-list");
const quizContainer = document.querySelector(".quiz-content");
const resultsContainer = document.getElementById("results-container");

// Display Hotkey Info Popup
window.onload = function() {
    alert("Welcome to the quiz!\n\nHotkeys Available:\n- Space: Next Question\n- B: Previous Question\n- 1-5: Select Answer Choices\n Anki remotes should be compatible! \n\nGood luck!");
};

// Load Questions into Sidebar
quizData.forEach((_, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = index + 1;
    listItem.classList.add("question-bubble");
    listItem.onclick = () => loadQuestion(index);
    listItem.setAttribute("data-index", index);
    questionList.appendChild(listItem);
});

// Load Question
function loadQuestion(index) {
    if (index >= quizData.length) {
        showResults();
        return;
    }

    currentQuestionIndex = index;
    const q = quizData[index];
    
    questionText.textContent = q.question;
    choicesContainer.innerHTML = "";
    
    q.choices.forEach((choice, i) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(i, button);
        button.classList.add("choice-btn");
        
        if (selectedAnswers[currentQuestionIndex] !== null) {
            if (i === selectedAnswers[currentQuestionIndex]) {
                button.style.backgroundColor = selectedAnswers[currentQuestionIndex] === q.correctAnswer ? "green" : "red";
            }
            if (i === q.correctAnswer) {
                button.style.backgroundColor = "green";
            }
        }
        
        choicesContainer.appendChild(button);
    });

    if (explanationsShown[currentQuestionIndex]) {
        explanationBox.textContent = q.explanation;
        explanationBox.classList.remove("hidden");
    } else {
        explanationBox.textContent = "";
        explanationBox.classList.add("hidden");
    }

    updateProgress();
}

// Check Answer
function checkAnswer(selectedIndex, button) {
    if (answeredQuestions[currentQuestionIndex]) return; // Prevent multiple answers

    const q = quizData[currentQuestionIndex];
    explanationBox.textContent = q.explanation;
    explanationBox.classList.remove("hidden");

    const questionBubble = document.querySelector(`.question-bubble[data-index="${currentQuestionIndex}"]`);

    if (selectedIndex === q.correctAnswer) {
        button.style.backgroundColor = "green";
        questionBubble.style.backgroundColor = "green";
        correctAnswers++;
    } else {
        button.style.backgroundColor = "red";
        questionBubble.style.backgroundColor = "red";
        incorrectAnswers++;
        
        // Highlight correct answer in green
        const buttons = choicesContainer.getElementsByTagName("button");
        buttons[q.correctAnswer].style.backgroundColor = "green";
    }

    answeredQuestions[currentQuestionIndex] = true; // Mark as answered
    explanationsShown[currentQuestionIndex] = true; // Keep explanation visible
    selectedAnswers[currentQuestionIndex] = selectedIndex;
    
    sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    sessionStorage.setItem("explanationsShown", JSON.stringify(explanationsShown));
    sessionStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    
    updateProgress();
}

// Update Progress
function updateProgress() {
    progressText.textContent = `${currentQuestionIndex + 1}/${quizData.length}`;
    correctText.textContent = correctAnswers;
    incorrectText.textContent = incorrectAnswers;
}

// Show Final Results Popup
function showResultsPopup() {
    const scorePercentage = ((correctAnswers / quizData.length) * 100).toFixed(2);
    alert(`Quiz Completed!\n\nYour Score: ${correctAnswers}/${quizData.length} (${scorePercentage}%)\n\nCongratulations on finishing the quiz!`);
}

// Navigation Controls
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex + 1 >= quizData.length) {
        showResultsPopup();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
};
document.getElementById("prev-btn").onclick = () => loadQuestion(Math.max(currentQuestionIndex - 1, 0));

// Hotkey Navigation & Answer Selection
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        loadQuestion(currentQuestionIndex + 1);
    } else if (event.code === "KeyB") {
        loadQuestion(Math.max(currentQuestionIndex - 1, 0));
    } else if (event.key >= "1" && event.key <= "5") {
        const answerIndex = parseInt(event.key) - 1;
        if (answerIndex < quizData[currentQuestionIndex].choices.length) {
            const buttons = choicesContainer.getElementsByTagName("button");
            if (buttons[answerIndex]) {
                buttons[answerIndex].click();
            }
        }
    }
});

// Load First Question on Start
loadQuestion(0);
