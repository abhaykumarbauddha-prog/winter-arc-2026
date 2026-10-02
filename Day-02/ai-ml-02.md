Machine Learning ko seekhne ke tareeqe (learning styles) ke hisaab se teen main categories me baanta gaya hai.

---

### 1. Supervised Learning (Teacher ke Saath Padhai)

* **Mental Model:** Socho ek bachha exam ki taiyari kar raha hai jiske paas **Questions aur unke Answers (Solutions)** dono pehle se maujood hain. Teacher use har sawal ke saath sahi jawab dikha kar sikhata hai.
* **Data Type:** **Labeled Data** (Input $X$ aur uska correct output $Y$ dono model ko diye jaate hain).
* **Kaise Kaam Karta Hai:** Model ko hazaron photos di jaati hain jin par likha hota hai "Yeh billi hai" ya "Yeh kutta hai". Jab model kaafi examples dekh leta hai, tab nayi unseen photo dekh kar wo sahi guess kar pata hai.
* **Real-World Examples:**
* **Email Spam Filter:** Purane hazaron emails jin par "Spam" ya "Not Spam" ka label laga hai, unse seekhna.
* **House Price Prediction:** Ghar ka size, bedrooms, aur location dekh kar exact keemat batana.



---

### 2. Unsupervised Learning (Self-Study Bina Kisi Guide Ke)

* **Mental Model:** Socho ek bachhe ke saamne dher saare mixed Lego blocks phek diye gaye hain, bina kisi instruction manual ya solution ke. Bachha khud dimaag laga kar unhe color, size ya shape ke hisaab se alag-alag dheriyo me baant deta hai.
* **Data Type:** **Unlabeled Data** (Sirf raw data diya jata hai, koi target answer ya label nahi hota).
* **Kaise Kaam Karta Hai:** Model data ke andar ke hidden patterns, similarities aur groups (clusters) ko khud khojta hai.
* **Real-World Examples:**
* **Customer Segmentation:** Ek shopping app dekhta hai ki kaunse log raat me saste kapde khareedte hain aur kaunse log din me mehnge gadgets, aur unke groups bana deta hai.
* **Recommendation Systems:** Netflix par agar 10,000 logo ki watching habits ek jaisi hain, toh unhe ek group maan kar same shows suggest karna.



---

### 3. Reinforcement Learning (Video Game / Trial & Error)

* **Mental Model:** Socho ek kutte ko nayi trick sikhayi ja rahi hai. Jab wo sahi karta hai, to use **Treat (Reward)** milti hai. Jab wo galti karta hai, to use **"No!" (Penalty)** milti hai. Dheere-dheere wo reward maximize karne ke liye sahi harkat seekh leta hai.
* **Data Type:** **No Static Data** (Model ek environment ke andar actions leta hai aur feedback se seekhta hai).
* **Key Terms:** **Agent** (Player), **Environment** (Game world), **Action** (Move), **Reward/Penalty** (Score points).
* **Kaise Kaam Karta Hai:** Shuru me model bilkul random galatiyan karta hai aur game haar jaata hai. Par hazaron baar khelne ke baad use samajh aa jata hai ki kaunse moves karne se score sabse zyada badhta hai.
* **Real-World Examples:**
* **Self-Driving Cars:** Car chalate waqt lane me rehne par reward aur divider se takrane ke risk par penalty.
* **Chess / Game Bots (jaise AlphaGo):** Lakho games khud ke khilaf khel kar best winning strategy banana.



---

### Quick Summary

| Category | Input Data | Target Answer? | Real-World Funda |
| --- | --- | --- | --- |
| **Supervised** | Input + Correct Labels | **Haan** | Flashcards dekh kar ratna |
| **Unsupervised** | Sirf Raw Data | **Nahi** | Similar cheezon ke groups banana |
| **Reinforcement** | Environment & Rewards | **Nahi (Score milta hai)** | Game khelte-khelte master banna |