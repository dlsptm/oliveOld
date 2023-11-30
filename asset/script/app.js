const items = [
  {
    id: 14,
    brand: "Torriden",
    title: "Solid In Ceramide Lip Essence 11mL",
    category: "makeup",
    price: '10',
    image: './asset/img/items/torriden_lip_essence.jpeg',
    ingredients: 'Polyisobutene, Petrolatum, Diisostearyl Malate, Simmondsia Chinensis (Jojoba) Seed Oil, Butyrospermum Parkii (Shea) Butter, Sorbitan Sesquioleate, Macadamia Ternifolia Seed Oil, Olea Europaea (Olive) Fruit Oil, Adansonia Digitata Seed Oil, Ceramide NP (1.215ppm), Ceramide NS (0.045ppm), Ceramide AS (0.045ppm), Ceramide EOP (0.0225ppm), Ceramide AP (0.0225ppm), Stearic Acid, Cholesterol, Vinegar, Sodium Hyaluronate, Panthenol, Trehalose, Hydrogenated Lecithin, Microcrystalline Wax, Hizikia Fusiforme Extract, Glycerin, Butylene Glycol, Water, Caprylic/Capric Triglyceride, 1,2-Hexanediol,',
    useInfo: '1. Apply an appropriate amount to your lips by dabbing the applicator directly onto your lips or using your finger. 2. Apply a generous amount to your lips as a lip pack.'
  },
  {
    id: 18,
    brand: "Beauty of Joseon",
    title: "Revive Eye Cream Ginseng + Retinal 30mL",
    category: "skincare",
    price: '16.5',
    image: './asset/img/items/boj_eyecream.jpeg',
    ingredients: 'Water, Panax Ginseng Root Extract, Glycerin, Dipropylene Glycol, Caprylic/Capric Triglyceride, 1,2-Hexanediol, Pentaerythrityl Tetraethylhexanoate, Niacinamide, Butylene Glycol Dicaprylate/Dicaprate, Cetearyl Alcohol, Sorbitan Olivate, Cetearyl Olivate, Butylene Glycol, Hydrogenated Lecithin, Tromethamine, Carbomer, Glyceryl Stearate, Macadamia Ternifolia Seed Oil, Adenosine, Theobroma Cacao (Cocoa) Extract, Dextrin, Cholesterol, Polyglyceryl-10 Oleate, Retinal, Brassica Campestris (Rapeseed) Sterols, Phytosteryl/Behenyl/Octyldodecyl Lauroyl Glutamate, Silica, Sodium Hyaluronate, Tocopherol, Aluminum/Magnesium Hydroxide Stearate, Potassium Cetyl Phosphate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, Ceramide NP, Palmitoyl Tripeptide-5, Disodium EDTA, Ethylhexylglycerin',
    useInfo: 'Apply an appropriate amount to your eye areas and pat lightly for better absorption.',
  }, 
  {
  id: 1,
  brand: "Anua",
  title: "Heartleaf Pore Control Cleansing Oil 350mL",
  category: "skincare",
  price: '15.5',
  image: './asset/img/items/product_Anua.jpeg',
  ingredients: 'Ethylhexyl Palmitate, Sorbeth-30 Tetraoleate, Sorbitan Sesquioleate, Caprylic/Capric Triglyceride, Butyl Avocadate, Fragrance, Helianthus Annuus (Sunflower) Seed Oil, Macadamia Ternifolia Seed Oil, Olea Europaea (Olive) Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Vitis Vinifera (Grape) Seed Oil, Caprylyl Glycol, Ethylhexylglycerin, Curcuma Longa (Turmeric) Root Extract, Melia Azadirachta Flower Extract, Tocopherol, Melia Azadirachta Leaf Extract, Houttuynia Cordata Extract, Corallina Officinalis Extract, Melia Azadirachta Bark Extract, Moringa Oleifera Seed Oil, Ocimum Sanctum Leaf Extract',
  useInfo: 'Squirt an appropriate amount in your dry hand and massage over your face in gentle rolling motions. Rinse thoroughly with lukewarm water.'
}, {
  id: 2,
  brand: "Biodance",
  title: "Pore Tightening Collagen Ampoule 30mL",
  category: "skincare",
  price: '46',
  image: './asset/img/items/biodance.jpeg',
  ingredients: 'Collagen Extract (74%), Water, Glycerin, Propanediol, Panthenol, 1,2-Hexanediol, Niacinamide, Sodium Polyacryloyldimethyl Taurate, Butylene Glycol, Allantoin, Polyglyceryl-10 Laurate, Ethylhexylglycerin, Hydrolyzed Hyaluronic Acid, Xanthan Gum, Sodium Polyacrylate, Adenosine, Polyquaternium-51, Disodium EDTA, Caprylyl Glycol, Alginic Acid, Silanetriol, Palmitoyl Tripeptide-5, Sodium Hyaluronate, Hydrolyzed Elastin, Soluble Elastin, Elastin, Hydroxypropyltrimonium Hyaluronate, Tocopherol, Sodium Acetylated Hyaluronate, Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Hydrolyzed Sodium Hyaluronate, Potassium Hyaluronate',
  useInfo: 'Apply an appropriate amount evenly to your skin.',
}, {
  id: 3,
  brand: "Mediheal",
  title: "Vitamin C Brightening Serum 40mL",
  category: "skincare",
  price: '29',
  image: './asset/img/items/product_mediheal.jpeg',
  ingredients: 'Water, Glycerin, Butylene Glycol, Betaine, Niacinamide (30,000 ppm), 1,2-Hexanediol, Methylpropanediol, Melia Azadirachta Flower Extract, Ocimum Sanctum Leaf Extract, Melia Azadirachta Leaf Extract, Curcuma Longa (Turmeric) Root Extract, Corallina Officinalis Extract, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Theobroma Cacao (Cocoa) Extract, Hyaluronic Acid, Panthenol (5,000 ppm), Polyglyceryl-10 Laurate, Hydrogenated Lecithin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Tromethamine, Caprylic/Capric Triglyceride, Ethylhexylglycerin, Propanediol, Adenosine, Sodium Hyaluronate Crosspolymer, Tocopherol (200 ppm), Polyglyceryl-10 Oleate, Hydrolyzed Glycosaminoglycans, 3-O-Ethyl Ascorbic Acid (100 ppm), Sodium Phytate, Ascorbic Acid (50 ppm), Ceramide NP, Benzyl Glycol, Beta-Glucan, Dextrin, Capryloyl Salicylic Acid, Gluconolactone, Carbomer, Xanthan Gum, Fragrance',
  useInfo: 'Apply an appropriate amount of the product evenly to your face in gentle patting motions until fully absorbed.',
}, {
  id: 4,
  brand: "Cosrx",
  title: "Advanced Snail Radiance Dual Essence 80mL",
  category: "skincare",
  price: '23.45',
  image: './asset/img/items/product_cosrx.jpeg',
  ingredients: 'Snail Secretion Filtrate (74.3%), Butylene Glycol, Niacinamide,1,2-Hexanediol, Betaine, Panthenol, Water, Glycerine, Limnanthes Alba (Meadowfoam) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil, Allantoin, Carbomer, Macadamia Ternifolia Seed Oil,Sodium Polyacrylate, Sodium Hyaluronate, Inulin Lauryl Carbamate, Arginine,Argania Spinosa Kernel Oil, Xanthan Gum, Sodium Surfactin, Ethylhexylglycerin, Glutathione',
  useInfo: 'Apply 1 to 2 pumps evenly to your face and gentle pat around for better absorption.',
}, {
  id: 5,
  brand: "Cosrx",
  title: "Complexion Clarity Bestsellers Set",
  category: "best",
  price: '29.9',
  image: './asset/img/items/setcosrx_best.jpeg',
  ingredients: `Advanced Snail 96 Mucin Power Essence
  Snail Secretion Filtrate, Betaine, Butylene Glycol, 1,2-Hexanediol, Sodium Polyacrylate, Phenoxyethanol, Sodium Hyaluronate, Allantoin, Ethyl Hexanediol, Carbomer, Panthenol, Arginine
  
  The Vitamin C 23 Serum
  Water,Ascorbic Acid,Propanediol,Dimethicone,Tromethamine,Panthenol,Ethyl Ascorbyl Ether,Squalane,Caffeine,Sodium Chloride,Sodium yaluronate,Sodium Sulfite,Disodium EDTA,Glutathione,Adenosine,Acetyl Glucosamine, Gardenia Florida Fruit Extract,Allantoin,Dextrin,Tocotrienol, Tocopherol,Elaeis uineensis (Palm) Oil,Butylene Glycol,Arginine,Niacinamide,Pentylene Glycol,Alcohol Denat.,Helianthus Annuus (Sunflower) Seed Oil,Glycyrrhiza Glabra (Licorice) Extract,Methyl Trimethicone,Carthamus Tinctorius (Safflower) Seed Oil,Camellia Japonica Seed Oil,Daucus Carota Sativa (Carrot) Root Extract,Beta-Carotene
  
  Aloe Soothing Sun Cream
  Water, Ethylhexyl Methoxycinnamate, Glycerin, Propylene Glycol, Cyclopentasiloxane, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Phenylbenzimidazole sulphonic acid, Dicaprylyl Carbonate, Isoamyl p-methoxycinnamate, Potassium Cetyl Phosphate, Alcohol, Dimethicone, Glyceryl Stearate, Butylene Glycol, Titanium Dioxide, C14-22 Alcohol, Polymethyl methacrylate, Cetearyl Alcohol, Candelabra Aloe Leaf Extract(5500ppm), Dipotassium glycyrrhizate, Tocopheryl Acetate, PEG-100 Stearate, Silica, C12-20 Alkyl Glucoside, Dimethicone/Vinyl Dimethicone Crosspolymer, Aluminum Hydroxide, Stearic Acid, Caprylyl Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Carbomer, Xanthan Gum, Triethanolamine, Sodium Hydroxide, Fragrance, Phenoxyethanol, Disodium EDTA
  
  
  Low pH Good Morning Gel Cleanser
  Water, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, Polysorbate 20, Styrax Japonicus Branch/Fruit/Leaf Extract, Butylene Glycol, Saccharomyces Ferment Filtrate, Cryptomeria Japonica Leaf Extract, Nelumbo Nucifera Leaf Extract, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pueraria Lobata Root Extract, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Allantoin, Caprylyl Glycol, Ethylhexylglycerin, Betaine Salicylate, Citric Acid, Ethyl Hexanediol, 1,2-Hexanediol, Trisodium Ethylenediamine Disuccinate, Sodium Benzoate, Disodium EDTA`,
  useInfo: `	1. Snail Essence
  Apply an appropriate amount in the Serum/Essence step of your skincare routine.
  1) Apply a little to the forehead and nose areas, not too much.
  2) Apply the essence generously to the cheeks, gently rubbing it in until it is absorbed.
  3) Under the eyes, pat the product into the skin with your fingers.
  
  2. Vitamin C Serum
  Drop an appropriate amount in your hand and apply it to your face with your fingertips, in gentle rolling motions.
  1. Put the included ampoule dropper in the bottle and lightly shake it side to side (Do not shake before opening the bottle as it may cause overflow.)
  2. Drop an appropriate amount on your cheeks.
  3. Massage around your face, in the order of the cheeks, forehead and chin (neck) in gentle circular motions.
  4. Gently massage the C zone (from the eyebrow bone towards the cheeks) in circular motions to lift up the skin.
  5. Continue with your skin care routine, spreading the formula, from the center of the face outwards.
  *Be sure to wear sunscreen after using this product during the day.
  
  3. Aloe Soothing Sun Cream
  Apply an appropriate amount to the skin before going out for UV protection.
  Reapply as frequently as needed when exposed to UV rays for a long time or during outdoor activities.
  
  4. Good Morning Gel Cleanser
  For cleansing in the morning: Rub your wet face with an appropriate amount and rinse thoroughly with lukewarm water.
  For general use: After removing the makeup, work up a lather with an appropriate amount and rub around your face. Rinse thoroughly with lukewarm water.`,
}, {
  id: 6,
  brand: "Anua",
  title: "Heartleaf 77% Soothing Toner 350ml",
  category: "skincare",
  price: '19.9',
  image: './asset/img/items/product_Anua_2.jpeg',
  ingredients: 'Houttuynia Cordata Extract, Water, 1,2-Hexanediol, Glycerin, Betaine, Centella Asiatica Extract, Vitex Agnus-Castus Extract, Arctium Lappa Root Extract, Phellinus Linteus Extract, Portulaca Oleracea Extract, Grape Fruit Extract, Malus Domestica Fruit Extract, Saccharum Officinarum (Sugarcane) Extract, Panthenol, Matricaria Flower Extract, Sodium Hyaluronate, Hydroxypropyltrimonium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Potassium Hyaluronate, Methylpropanediol, Butylene Glycol, Isopentyldiol, Acrylate/C10-30 Alkyl Acrylate Crosspolymer, Tromethamine, Disodium EDTA',
  useInfo: 'After cleansing, lightly pat a small amount into skin until absorbed.',
}, {
  id: 7,
  brand: "Anua",
  title: "Set bestseller Anua Toner+Lotion",
  category: "best",
  price: '48.75',
  image: './asset/img/items/best_set_Anua.jpeg',
  ingredients: 'Houttuynia Cordata Extract ( 77% ), Water, 1,2-Hexanediol, Glycerine, Betaine, Centella Asiatica Extract, Vitex Agnus-Castus Extract Arctium Lappa Root Extract, Phellinus Linteus Extract, Portulaca Oleracea Extract, Vitis Vinifera (Grape) Fruit Extract, Malus Domestica Fruit Extract, Saccharum Officinarum (Sugarcane) Extract, Panthenol, Chamomilla Recutita (Matricaria) Flower Extract, Sodium Hyaluronate, Hydroxypropyltrimonium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Potassium Hyaluronate, Methylpropanediol, Butylene Glycol, Isopentyldiol Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Tromethamine, Disodium EDTA, Houttuynia Cordata Extract,Glycerine,Caprylic/Capric Triglyceride,Cetearyl Alcohol,Butylene Glycol,1,2-Hexanediol,Vegetable Squalane,Laminaria Japonica Extract,Eclipta Prostrata Leaf Extract,Centella Asiatica Extract,Ficus Carica (Fig) Fruit Extract,Ulmus Davidiana Root Extract,Amaranthus Caudatus Seed Extract,Hydrogenated Lecithin,Sodium Hyaluronate,Glyceryl Stearate,Cetearyl Glucoside,Water,Sodium Stearoyl Glutamate,Carbomer,Shea Butter,Arginine,Fructooligosaccharides,Beta-Glucan,Glucose,Hydrolyzed Hyaluronic Acid,Ceramide NP,Sodium Acetylated Hyaluronate,Ethylhexylglycerin',
  useInfo: 'After cleansing, take a moderate amount and tap it on skin for absorption. At the last stage of your daily skincare routine, evenly apply an adequate amount onto the skin for absorption.',
}, {
  id: 8,
  brand: "Cosrx",
  title: "Low pH Good Morning Gel Cleanser 150ml",
  category: "skincare",
  price: '10.47',
  image: './asset/img/items/cosrx_cleanser.jpeg',
  ingredients: 'Pueraria Lobata Root Extract, Ulmus Davidiana Root Extract, Oenothera Biennis (Evening Primrose) Flower Extract, Pinus Palustris Leaf Extract, Disodium EDTA, Betaine Salicylate, Butylene Glycol, Cryptomeria Japonica Leaf Extract, Sodium Benzoate, Citric Acid, Allantoin, Ethyl Hexanediol, Ethylhexylglycerin, Nelumbo Nucifera Leaf Extract, Water, Caprylyl Glycol, Cocamidopropyl Betaine, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Polysorbate 20, Saccharomyces Ferment Filtrate, Trisodium Ethylenediamine Disuccinate, Sodium Lauroyl Methyl Isethionate, Styrax Japonicus Branch/Fruit/Leaf Extract',
  useInfo: 'For a morning cleanse: gently massage Good Morning Gel Cleanser on a wet face, then rinse with lukewarm water to freshen up your morning. For a basic cleanse: after the first cleanse, rub Good Morning Gel Cleanser to create enough lather, then gently massage on the face and thoroughly rinse with lukewarm water.',
}, {
  id: 9,
  brand: "Biodance",
  title: "Skin Barrier Sun Safe 30mL",
  category: "skincare",
  price: '26',
  image: './asset/img/items/biodance_skin.jpeg',
  ingredients: 'Water, Zinc Oxide, Caprylyl Methicone, Caprylic/Capric Triglyceride, Titanium Dioxide, Butyloctyl Salicylate, Diphenylsiloxy Phenyl Trimethicone, Butylene Glycol, Isohexadecane, Glycerin, Methylpropanediol, Polyglyceryl-4 Diisostearate/Polyhydroxystearate/Sebacate, Polymethylsilsesquioxane, Sodium Hyaluronate, Ceramide NP, Cetyl Ethylhexanoate, Butyrospermum Parkii (Shea) Butter, Ethylhexyl Palmitate, Potassium Cetyl Phosphate, Hydrolyzed Hyaluronic Acid, Hydroxypropyltrimonium Hyaluronate, Sodium Hyaluronate Crosspolymer, Sodium Acetylated Hyaluronate, Ceramide NS, Ceramide EOP, Polyglyceryl-3 Oleate, Aluminum Hydroxide, Stearic Acid, Diisostearoyl Polyglyceryl-3 Dimer Dilinoleate, Hydrogen Dimethicone, Caprylyl Glycol, Hydroxyacetophenone, Pentylene Glycol, Sodium Methyl Stearoyl Taurate, Mentha Arvensis Leaf Oil, Triethoxycaprylylsilane, Trehalose, Barosma Betulina Leaf Extract, Dipropylene Glycol, Ethylhexylglycerin, Sodium PCA, Rosa Damascena Flower Water, Disodium EDTA, Xanthan Gum, Tocopherol, Macadamia Ternifolia Seed Oil, Lactobacillus Ferment Lysate, Bifida Ferment Lysate, Streptococcus Thermophilus Ferment, 1,2-Hexanediol, Polyglyceryl-10 Myristate, Phytosteryl/Behenyl/Octyldodecyl Lauroyl Glutamate, Brassica Campestris (Rapeseed) Sterols, Cholesterol, Hydrogenated Lecithin, Polyglyceryl-10 Oleate',
  useInfo: 'Use Skin Barrier Sun Safe as a makeup base before putting on makeup.',
}, {
  id: 10,
  brand: "Etude",
  title: "Mood Matte Lipstick 3.5g",
  category: "makeup",
  price: '26',
  image: './asset/img/items/etudehouse_lip.jpeg',
  ingredients: 'Dimethicone, Phenyl Trimethicone, Butylene Glycol Dicaprylate/Dicaprate, Isoeicosane, Diethylhexyl Carbonate, Polymethylsilsesquioxane, Diisostearyl Malate, Polyglyceryl-2 Triisostearate, Titanium Dioxide (CI 77891), Methyl Methacrylate Crosspolymer, Synthetic Wax, Synthetic Fluorphlogopite, Silica, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Candelilla Wax, Yellow Iron Oxide, Polyethylene, Red Iron Oxide, Dimethicone Crosspolymer, Ethylhexyl Hydroxystearate, Dicalcium Phosphate, Diglyceryl Sebacate/Isopalmitate, Polyhydroxystearic Acid, Black Iron Oxide, Lithol Rubine BCA, Triethoxycaprylylsilane, Carnauba Wax, Polyglyceryl-2 Diisostearate, Ethylhexyl Palmitate, Lecithin, Isostearic Acid, Isopropyl Myristate, Fragrance, Polyglyceryl-3 Polyricinoleate, Caprylyl Glycol, Glyceryl Caprylate, Pentaerythrityl Tetra-di-T-Butyl Hydroxyhydrocinnamate, Purified Water, Butylene Glycol, 1,2-Hexanediol, Prunus Persica (Peach) Fruit Extract',
  useInfo: 'Apply along the lip lines for a full lip, or tap on the center of lips and blend out for a gradient look.',
}, {
  id: 11,
  brand: "Beauty of Joseon",
  title: "Pine Grove Body Wash 400mL",
  category: "body",
  price: '25.5',
  image: './asset/img/items/beauty_of_joseon_body.jpeg',
  ingredients: 'Water, Sodium C14-16 Olefin Sulfonate, Glycerin, Disodium Cocoamphodiacetate, Acrylates Copolymer, Glycine Soja (Soybean) Seed Extract, Juglans Nigra (Black Walnut) Leaf Extract, Pinus Densiflora Leaf Extract, Sophora Japonica Leaf Extract, Vincetoxicum Atratum Extract, Trichosanthes Kirilowii Root Extract, Althaea Rosea Flower Extract, Chamaecyparis Obtusa Water, Pinus Sylvestris Leaf Extract, Cocos Nucifera(Coconut) Fruit Extract, Hippophae Rhamnoides Fruit Extract, Bambusa Vulgaris Water, Cupressus Sempervirens Leaf Extract, Pinus Sylvestris Bud Extract, Pinus Pinaster Bark Extract, Anemarrhena Asphodeloides Root Extract, Hexylene Glycol, Sodium Chloride, Polyglyceryl-4 Caprate, Polyglyceryl-6 Caprate, Butylene Glycol, Propanediol, Citric Acid, 1,2-Hexanediol, Caprylic/Capric Triglyceride, Sodium Phytate, Hydrogenated Lecithin, Ceramide NP, Pentylene Glycol, Ethylhexylglycerin, Octanediol, Hydrogenated Polyisobutene, Methylpropanediol, Dipropylene Glycol, Tocopherol, Potassium Sorbate, Fragrance',
  useInfo: 'Squirt 1-2 pumps on a shower ball and work up a lather. Rub around the entire body and rinse thoroughly with lukewarm water.',
}, {
  id: 12,
  brand: "Goodal",
  title: "Green Tangerine Vita C Dark Spot Care Serum 50ml",
  category: "skincare",
  price: '36',
  image: './asset/img/items/goodal_vitam_C.jpeg',
  ingredients: 'Citrus Tangerina (Tangerine) Extract (70%), Butylene Glycol, Niacinamide, Dipropylene Glycol, Methyl Gluceth-20, Water, 1,2-Hexanediol, Glycereth-26 Arbutin, Chondrus Crispus Extract, Saccharum Officinarum (Sugarcane) Extract, Hydrolyzed Jojoba Esters, Sodium Hyaluronate, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Melia Azadirachta Flower Extract, Ocimum Sanctum Leaf Extract, Melia Azadirachta Leaf Extract, Curcuma Longa (Turmeric) Root Extract, Corallina Officinalis Extract, Lavandula Angustifolia (Lavender) Oil, Citrus Limon (Lemon) Peel Oil, Cananga Odorata Flower Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Eucalyptus Globulus Leaf Extract, Glycyrrhiza Glabra (Licorice) Root Extract, Anthemis Nobilis Flower Extract, Camellia Sinensis Leaf Extract, Centella Asiatica Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Polygonum Cuspidatum Root Extract, Centella Asiatica Leaf Extract, Ammonium Acryloyldimethyltaurate/VP Copolymer, Panthenol, Choleth-24, Tromethamine, Ethylhexylglycerin, Allantoin, Tocopheryl Acetate, Adenosine, Sodium Phytate, Ascorbyl Glucoside, Dipotassium Glycyrrhizate, Glycerin, Madecassoside, Maltodextrin, Saccharide Hydrolysate, Tocopherol, Asiaticoside, Carbomer, Xanthan Gum, Limonene, Linalool',
  useInfo: 'Apply a couple of pumps of the formula to your entire face before using cream.',
}, {
  id: 13,
  brand: "Roundlab",
  title: "1025 Dokdo Sun Cream 50mL",
  category: "sunscreen",
  price: '11.4',
  image: './asset/img/items/roundlab_sunscreen.jpeg',
  ingredients: 'Water, Dibutyl Adipate, Propanediol, Ethylhexyl Triazone, Terephthalylidene Dicamphor Sulfonic Acid, Niacinamide, Tromethamine, Polyglyceryl-3 Distearate, 1,2-Hexanediol, Pentylene Glycol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Cetearyl Alcohol, Caprylyl Methicone, Polysilicone-15, Sea Water, Sodium Hyaluronate, Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Butylene Glycol, Salix Alba (Willow) Bark Extract, Camellia Sinensis Leaf Extract, Centella Asiatica Leaf Extract, Pinus Densiflora Leaf Extract, Citrus Aurantium Bergamia (Bergamot) Leaf Extract, Coffea Arabica (Coffee) Seed Extract, Cladosiphon Okamuranus Extract, Panthenol, Betaine, Allantoin, Ethylhexylglycerin, Adenosine, Polymethylsilsesquioxane, Propylene Glycol Dicaprylate/Dicaprate, Dimethicone/Vinyl Dimethicone Crosspolymer, Glyceryl Stearate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Potassium Cetyl Phosphate, Methylpropanediol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Glyceryl Stearate Citrate, Ammonium Acryloyldimethyltaurate/VP Copolymer, Silica, Polyether-1, Biosaccharide Gum-1, Decyl Glucoside, Tocopherol, Carbomer',
  useInfo: 'In the final step of your skin care routine, apply an appropriate amount evenly to areas prone to sun exposure.',
}, {
  id: 15,
  brand: "Cosrx",
  title: "Propolis Light Ampule 40ml",
  category: "skincare",
  price: '21',
  image: './asset/img/items/cosrx_ampoule.jpeg',
  ingredients: 'Cassia Obtusifolia Seed Extract, Glycerin, Betaine, Butylene Glycol, Sodium Hyaluronate, Arginine, Carbomer, Panthenol, Propolis Extract, Hydroxyethylcellulose, 1,2-Hexanediol',
  useInfo: 't the stage of ampoule or essence, dispense a small amount and evenly apply to the face, then pat into the skin.',
}, {
  id: 16,
  brand: "Roundlab",
  title: "1025 Dokdo Cleanser 250ml",
  category: "skincare",
  price: '20.8',
  image: './asset/img/items/roundlab_cleanser.jpeg',
  ingredients: '	Water, Sodium Cocoyl Isethionate, Glycerine, Sodium Methyl Cocoyl Taurate, Coco-Betaine, Potassium Cocoyl Glycinate, Potassium Benzoate, Sodium Chloride, Polyquaternium-67, Potassium Cocoate, Citric Acid, Fructooligosaccharides, Saccharide Hydrolysate, Disodium EDTA, Pullulan, 1,2-Hexanediol, Allantoin, Panthenol, Sea Water, Sodium Acetate, Butylene Glycol, Chamomilla Recutita (Matricaria) Flower Oil, Caprylic/Capric Triglyceride, Beta-Glucan, Phosphatidylcholine, Hyaluronic Acid, Ethylhexylglycerin, Ceramide NP, Glycine, Hydrolyzed Hyaluronic Acid, Glutamic Acid, Serine, Sodium Hyaluronate, Lysine, Alanine, Arginine, Threonine, Proline',
  useInfo: '	In the morning and For night facial washes, take a moderate amount of the product and lather. Gently massage it on the face and wash thoroughly with lukewarm water.',
}, {
  id: 17,
  brand: "Etude",
  title: "Curl Fix Mascara",
  category: "makeup",
  price: '16',
  image: './asset/img/items/biodance.jpeg',
  ingredients: 'Isododecane, Trimethylsiloxysilicate, Ceresin, Dextrin Palmitate/Ethylhexanoate, Talc, Butyl Acrylate/Hydroxypropyl Dimethicone Acrylate Copolymer, Microcrystalline Wax, Iron Oxide Black, Disteardimonium Hectorite, Polypropylsilsesquioxane, Propylene Carbonate, Hydrogenated Polyisobutene, Triethoxycaprylylsilane, BHT',
  useInfo: 'Brush from the root to tip of the lashes.',
}, {
  id: 19,
  brand: "Laneige",
  title: "Cream Skin 170mL Special Set (+50mL)",
  category: "best",
  price: '35.2',
  image: './asset/img/items/laneige_set.jpeg',
  ingredients: 'Water, Butylene Glycol, Glycerine, Limnanthes Alba (Meadowfoam) Seed Oil, Isopentyldiol, 1,2-Hexanediol, Squalane, Polyglyceryl-10 Stearate, Glyceryl Stearate Citrate, Sodium Stearoyl Glutamate, Inulin Lauryl Carbamate, Glyceryl Caprylate, Ethylhexylglycerin, Propanediol, Disodium EDTA, Carbomer, Mannitol, Acrylates/Stearyl Methacrylate Copolymer, Tremella Fuciformis Sporocarp Extract, Hyaluronic Acid, Camellia Sinensis Leaf Extract, Xanthan Gum, Ceramide NP, Camellia Japonica Flower Extract, Tocopherol, Acetyl Tetrapeptide-11,',
  useInfo: `1. How to use: Apply an appropriate amount to your skin, twice daily – morning and evening and pat lightly for absorption.
  2. As a moisturizing pack: Soak a cotton pad with the formula and use it as a moisturizing pack.`,
}, {
  id: 20,
  brand: "Roundlab",
  title: "Dokdo Ampoule 45g",
  category: "skincare",
  price: '22.99',
  image: './asset/img/items/roundlab_ampoule.jpeg',
  ingredients: 'Purified Water, Butylene Glycol, Glycerin, Dipropylene Glycol, Propanediol, 1,2-Hexanediol, Sea Water, Hydrolyzed Hyaluronic Acid, Hydrolyzed Collagen, Panthenol, Chondrus Crispus Extract, Saccharum Officinarum (Sugarcane) Extract, Tromethamine, Ethylhexylglycerin, Caprylic/Capric Triglycerides, Betaine, Dipotassium Glycyrrhizate, Glyceryl Glucoside, Hydrogenated Lecithin, Ceramide NP, Tocopherol, Carbomer, Xanthan Gum',
  useInfo: `Prep the skin with toner. At the essence stage of your skincare routine, apply a small amount all over face until absorbed.
  *Before first use, take out the dropper completely and squeeze the rubber to let out the air.`,
}, {
  id: 21,
  brand: "Some by Mi",
  title: "AHA BHA PHA 30 Days Miracle Toner Special Set (150mL+30mL)",
  category: "skincare",
  price: '23.5',
  image: './asset/img/items/some_by_mi.jpeg',
  ingredients: 'Water, Butylene Glycol, Dipropylene Glycol, Glycerin, Niacinamide, Melaleuca Alternifolia (Tea Tree) Leaf Water, Polyglyceryl-4 Caprate, Carica Papaya (Papaya) Fruit Extract, Lens Esculenta (Lentil) Seed Extract, Hamamelis Virginiana (Witch Hazel) Extract, Nelumbium Speciosum Flower Extract, Swiftlet Nest Extract, Sodium Hyaluronate, Fructan, Allantoin, Adenosine, Hydroxyethyl Urea, Xylitol, Salicylic Acid (100 ppm), Lactobionic Acid(100 ppm), Citric Acid (500 ppm), Sodium Citrate, 1,2-Hexanediol, Benzyl Glycol, Ethylhexylglycerin, Raspberry Ketone, Mentha Piperita (Peppermint) Oil',
  useInfo: 'After cleansing your face, dampen a cotton pad with a liberal amount and gently wipe the face from the inner corner outwards, lightly pat into the skin.',
}, {
  id: 22,
  brand: "Etude",
  title: "Play Color Eyes 9 Colors",
  category: "makeup",
  price: '24.9',
  image: './asset/img/items/etude_eyes.jpeg',
  ingredients: '',
  useInfo: '',
}, {
  id: 23,
  brand: "Torriden",
  title: "Pore Dive-In Hyaluronic Acid Soothing Cream 100mL",
  category: "skincare",
  price: '34',
  image: './asset/img/items/torriden_cream.jpeg',
  ingredients: 'Calcium Titanium Borosilicate, Mica, Titanium Dioxide (CI 77891), Neopentyl Glycol Diethylhexanoate, Diphenylsiloxy Phenyl Trimethicone, Talc, Corn Starch, Octyldodecyl Stearoyl Stearate, Red Iron Oxide, Diisostearyl Malate, Dipentaerythrityl Hexahydroxystearate/Hexastearate/Hexarosinate, Magnesium Myristate, Isostearyl Neopentanoate, Synthetic Fluorphlogopite, Hydrogenated Castor Oil Isostearate, Synthetic Wax, Zinc Stearate, Silica, Tin Oxide, Ethylhexylglycerin, Caprylyl Glycol, Caprylic/Capric Triglyceride, Helindone Pink CN, Carmine, Methicone, Black Iron Oxide',
  useInfo: '	Gently apply around eyes using a finger or brush',
}, {
  id: 24,
  brand: "Goodal",
  title: " Green Tangerine Vita C Dark Spot Care Pad 70P",
  category: "skincare",
  price: '26.5',
  image: './asset/img/items/goodal_pads.jpeg',
  ingredients: 'Water,Glycerine,Methylpropanediol,Citrus Tangerina (Tangerine) Extract, Dipropylene Glycol,Niacinamide,Citrus Aurantium Bergamia (Bergamot) Fruit Oil,Melia Azadirachta Flower Extract,Ocimum Sanctum Leaf Extract,Melia Azadirachta Leaf Extract,Vincetoxicum Atratum Extract,Lavandula Angustifolia (Lavender) Oil,Hydrolyzed Hyaluronic Acid,Citrus Limon (Lemon) Peel Oil,Curcuma Longa (Turmeric) Root Extract,Cananga Odorata Flower Oil,Citrus Aurantium Dulcis (Orange) Peel Oil,Eucalyptus Globulus Leaf Extract,Corallina Officinalis Extract,Althaea Rosea Flower Extract,Centella Asiatica Leaf Extract,Hydroxyacetophenone,Butylene Glycol,1,2-Hexanediol,3-O-Ethyl Ascorbic Acid,Allantoin,Propanediol,Caprylyl Glycol,Polyglyceryl-10 Isostearate, Ethylhexylglycerin,Adenosine,Hydroxyethylcellulose,Polyglyceryl-10 Oleate,Sodium Phytate,Beta-Glucan,Citric Acid,Sodium Citrate,Tocopherol,Madecassoside,Asiaticoside,Ascorbic Acid,Capryloyl Salicylic Acid,Gluconolactone,Caffeine,Xanthan Gum,Limonene,Linalool',
  useInfo: `Gently wipe out the entire face except eye areas along the skin texture.
  * Use twice daily instead of toner. Additional washing is not necessary.
  * You can also use it to wipe out body parts.`,
}, {
  id: 25,
  brand: "Laneige",
  title: "Neo Foundation Brush 1ea",
  category: "makeup",
  price: '21.6',
  image: './asset/img/items/laneige_brush.jpeg',
  ingredients: '',
  useInfo: '',
}, {
  id: 26,
  brand: "Beauty of Joseon",
  title: "Ginseng Essence Water 150mL",
  category: "skincare",
  price: '16',
  image: './asset/img/items/boj_essence.jpeg',
  ingredients: '',
  useInfo: '',
}, {
  id: 27,
  brand: "Mediheal",
  title: "Paper Mulberry 4D White Mask Sheet 10P",
  category: "skincare",
  price: '46',
  image: './asset/img/items/mediheal_mask.jpeg',
  ingredients: '	(10 kinds of white food ingredients marked with *) Water, Butylene Glycol, Glycereth-26 Glycerin, Niacinamide, Broussonetia Kazinoki Root Extract (19,000 ppm), Propanediol, Hydroxyacetophenone, 1,2-Hexanediol, Carbomer, Arginine, Polyglyceryl-10 Laurate, Allantoin, Betaine, Xanthan Gum, Disodium EDTA, Dipotassium Glycyrrhizate, Chamaecyparis Obtusa Leaf Extract, Sodium Hyaluronate, Tocopheryl Acetate, Fragrance, *Sesamum Indicum (Sesame) Seed Extract, *Dioscorea Japonica Root Extract, *Platycodon Grandiflorus Root Extract, *Raphanus Sativus (Radish) Root Extract, *Asparagus Officinalis Stem Extract, *Cocos Nucifera(Coconut) Fruit Extract, *Allium Cepa (Onion) Bulb Extract, *Panax Ginseng Root Extract, *Brassica Oleracea Botrytis (Cauliflower) Extract, *Tremella Fuciformis (Mushroom) Extract, Ethylhexylglycerin',
  useInfo: `1. After cleansing and priming your skin with toner, place the mask sheet on your face, starting from the forehead, nose and upper cheeks. 2. Hold the ⓐ lifting line and pull up the ⓑ part to firmly support the cheeks. 3. Hold the ⓑ part while pressing the cheek with your hand and pull up the sheet along the jaw. 4. Remove the mask in 10–20 minutes and lightly pat the remaining essence to absorb into skin.`,
}, {
  id: 28,
  brand: "Anua",
  title: "Heartleaft 70% Daily Lotion 200mL",
  category: "skincare",
  price: '28.9',
  image: './asset/img/items/Anua_lotion.jpeg',
  ingredients: '	Houttuynia Cordata Extract (70%), Glycerin, 1,2-Hexanediol, Methyl Trimethicone, Ethylhexyl Stearate, Butylene Glycol, Hydrogenated Poly(C6-14 Olefin), Polyglyceryl-3 Distearate, Fraxinus Rhynchophylla Extract, Ocimum Basilicum (Basil) Flower/Leaf/Stem Extract, Ulmus Davidiana Root Extract, Amaranthus Caudatus Seed Extract, Hydrogenated Lecithin, Sodium Hyaluronate, Glyceryl Glucoside, Water, Glyceryl Stearate, Trehalose, Arginine, Carbomer, Glyceryl Stearate Citrate, Sodium Stearoyl Glutamate, Glucose, Disodium EDTA, Betaine, Hydrolyzed Hyaluronic Acid, Sodium Acetylated Hyaluronate, Ethylhexylglycerin',
  useInfo: '	At the last stage of your daily skincare routine, evenly apply an adequate amount onto the skin for absorption',
}, {
  id: 29,
  brand: "Etude",
  title: "Double Lasting Vegan Cover Foundation 30g",
  category: "makeup",
  price: '25.9',
  image: './asset/img/items/etude_foundation.jpeg',
  ingredients: 'Water, Titanium Dioxide (CI 77891), Diphenylsiloxy Phenyl Trimethicone, Methyl Trimethicone, Butylene Glycol, Homosalate, Isododecane, Titanium Dioxide, Caprylyl Methicone, Acrylates/Polytrimethylsiloxymethacrylate Copolymer, Lauryl Polyglyceryl-3 Polydimethylsiloxyethyl Dimethicone, Polyglyceryl-6 Polyricinoleate, Mica, 1,2-Hexanediol, Iron Oxide Yellow, Disteardimonium Hectorite, Sodium Chloride, Aluminum Hydroxide, Polyglyceryl-2 Isostearate, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Silica, Stearic Acid, Triethoxycaprylylsilane, Iron Oxide Red, Caprylyl Glycol, Glyceryl Caprylate, Trihydroxystearin, Methicone, Iron Oxide Black, Xanthan Gum, Disodium EDTA, Tocopherol',
  useInfo: `[Foundation] Shake up and down before use. Take an appropriate amount and gently apply in the direction of skin texture.

  [Brush] Take an appropriate amount and starting from the center of the face, apply outwards in the direction of skin texture. Finish by tapping the area you want to increase coverage.`,
}, {
  id: 30,
  brand: "Biodance",
  title: "Bio Collagen Real Deep Mask Sheet 7P",
  category: "masks",
  price: '42.5',
  image: './asset/img/items/biodance_masks.jpeg',
  ingredients: 'Water, Collagen Extract, Galactomyces Ferment Filtrate, Glycerine, Acrylates Copolymer, Niacinamide, Ceratonia Siliqua (Carob) Gum, Chondrus Crispus Extract, Betaine, Algin, Dipropylene Glycol, Agar, Hydroxyacetophenone, 1,2-Hexanediol, Potassium Chloride, Polyglyceryl-10 Laurate, Caprylyl Glycol, Sucrose, Butylene Glycol, Allantoin, Ethylhexylglycerin, Hydrolyzed Hyaluronic Acid, Adenosine, Disodium EDTA, Pyrus Communis (Pear) Fruit Extract, Rosa Damascena Flower Water, Iris Florentina Root Extract, Cucumis Melo (Melon) Fruit Extract, Hedera Helix (Ivy) Leaf/Stem Extract, Dipotassium Glycyrrhizate, Bifida Ferment Filtrate, Tocopherol, Lactobacillus Ferment, Lactobacillus Ferment Lysate',
  useInfo: `After your basic skin care routine, place the Collagen Mask Sheet on the skin and leave it on for 3-4 hours.
  TIP. Use it as a spleeing pack as the final step of your skin care regimen for better results.`,
}]

/* ARTICLES INDEX.HTML */
let cardsContainer = document.querySelector('.cards-container')
items.forEach(item => {
  cardsContainer.innerHTML += `
  <a href="./product.html?id=${item.id}">
  <article>
    <figure>
      <img src="${item.image}" alt="${item.title}">
    </figure>
    <div>
    <h2>${item.brand}</h2>
    <button data-id="${item.id}"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <figcaption>${item.title}</figcaption>
    <h3 id="price">${item.price}€</h3>
  </article>
  </a>`
})

// Gestion des clics sur les cartes pour rediriger vers la page product.html
cardsContainer.addEventListener('click', event => {
  const targetButton = event.target.closest('button[data-id]');

  if (targetButton) {
    const productId = targetButton.getAttribute('data-id');
    if (productId) {
      window.location.href = `./product.html?id=${productId}`;
    }
  }
});

/*********************************  FILTRE *********************************/

// Fonction pour afficher les produits filtrés dans l'interface utilisateur
function displayFilteredProducts(products) {
  // Effacer le contenu actuel de la section cardsContainer
  cardsContainer.innerHTML = '';

  // Afficher les produits filtrés
  products.forEach(item => {
    cardsContainer.innerHTML += `
      <a href="./product.html?id=${item.id}">
        <article>
          <figure>
            <img src="${item.image}" alt="${item.title}">
          </figure>
          <div>
            <h2>${item.brand}</h2>
            <button data-id="${item.id}"><i class="fa-solid fa-cart-shopping"></i></button>
          </div>
          <figcaption>${item.title}</figcaption>
          <h3 id="price">${item.price}€</h3>
        </article>
      </a>`;
  });

  // Gestion des clics sur les cartes pour rediriger vers la page product.html
  cardsContainer.addEventListener('click', event => {
    const targetButton = event.target.closest('button[data-id]');

    if (targetButton) {
      const productId = targetButton.getAttribute('data-id');
      if (productId) {
        window.location.href = `./product.html?id=${productId}`;
      }
    }
  });
}

//********** PRICE FILTER
const leftRangeInput = document.getElementById('priceRange_left');
const rightRangeInput = document.getElementById('priceRange_right');
const minPrice = document.querySelector('.min-price')
const maxPrice = document.querySelector('.max-price')


function filterProductsByPrice(minPrice, maxPrice) {
  return items.filter(item => {
    const itemPrice = parseFloat(item.price);
    return itemPrice >= minPrice && itemPrice <= maxPrice;
  });
}

function updateRangeValue(event) {
  const target = event.target;

  // Limiter les inputs : 0 & 25, 25 et 0
  if (parseInt(leftRangeInput.value) > rightRangeInput.value) {
    leftRangeInput.value = rightRangeInput.value;
  }
  
  minPrice.textContent = leftRangeInput.value;
  maxPrice.textContent = rightRangeInput.value;

  // Filtrer les produits avec les valeurs actuelles des plages de prix
  const filteredProducts = filterProductsByPrice(
    parseFloat(leftRangeInput.value),
    parseFloat(rightRangeInput.value)
  );

  // Mettre à jour l'affichage des produits filtrés
  displayFilteredProducts(filteredProducts);
}

leftRangeInput.addEventListener('input', updateRangeValue);
rightRangeInput.addEventListener('input', updateRangeValue);


//********** BRAND FILTER
const brandsFilter = document.querySelectorAll('input[type="checkbox"]');

function updateBrand() {
  const selectedBrands = Array.from(brandsFilter)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);


  if (selectedBrands.length === 0) {
    // Si aucune marque n'est sélectionnée, afficher tous les produits
    displayFilteredProducts(items);
    return;
  }

  // Filtrer les produits par marques sélectionnées
  const filteredProductsByBrand = items.filter(item => {
    return selectedBrands.includes(item.brand);
  });


  // Afficher les produits filtrés par marque
  displayFilteredProducts(filteredProductsByBrand);
}

brandsFilter.forEach(checkbox => {
  checkbox.addEventListener('change', updateBrand);
});

