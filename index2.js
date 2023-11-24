const fs = require("fs");

const arr = [
  "https://zolostays.com/pg-hostel-near-manyata-in-bangalore-zolo_scarlet-zoscl",

  "https://zolostays.com/hostels-in-cv_ramanagar-bangalore",

  "https://zolostays.com/pgs-in-maraimalai_nagar-chennai",

  "https://zolostays.com/single-room-for-rent-in-cv_ramanagar-bangalore",

  "https://zolostays.com/hostels-in-karvenagar-pune",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_aviano-zoavno",

  "https://zolostays.com/hostels-in-landmark_city-kota",

  "https://zolostays.com/pg-hostel-near-rt-nagar-in-bangalore-for-couples-zolo-bella-casa-zobec",

  "https://zolostays.com/single-room-for-rent-in-chakan_bhamboli-pune",

  "https://zolostays.com/single-room-for-rent-in-bkc_mumbai-mumbai",

  "https://zolostays.com/pg-hostel-near-hinjewadi-in-pune-zolo_ample-zp083",

  "https://zolostays.com/single-room-for-rent-in-c_i_t_nagar-chennai",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_dream_house-zodh",

  "https://zolostays.com/couple-single-room-for-rent-in-keshav_nagar-pune",

  "https://zolostays.com/couple-hostels-in-gandhipuram-coimbatore",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_carnations-2011",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_chronicle-zochr",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_phoenix-zophx",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_atlantis-zat",

  "https://zolostays.com/pg-hostel-near-immadahalli-in-bangalore-zolo_avni-zoav",

  "https://zolostays.com/pg-hostel-near-sarjapur-in-bangalore-zolo_helios-zohel",

  "https://zolostays.com/pg-hostel-near-sarjapur-in-bangalore-zolo_themis-zoth",

  "https://zolostays.com/pg-hostel-near-nagawara-in-bangalore-zolo_parea-zpa",

  "https://zolostays.com/pg-hostel-near-chandivali-in-mumbai-zolo_orchid_enclave-zloch",

  "https://zolostays.com/hostels-in-jb_nagar_andheri-mumbai",

  "https://zolostays.com/single-room-for-rent-in-lanco_hills_manikonda-hyderabad",

  "https://zolostays.com/pgs-in-kormangala_1st_block-bangalore",

  "https://zolostays.com/pg-hostel-near-govandi-in-mumbai-zolo_centrio-zlct",

  "https://zolostays.com/single-room-for-rent-in-indira_nagar-bangalore",

  "https://zolostays.com/single-room-for-rent-in-mamura_sector_66-noida-noida",

  "https://zolostays.com/hostels-in-mamura_sector_66-noida-noida",

  "https://zolostays.com/pg-hostel-near-arekere_hulimavu-in-bangalore-zolo_elegance-zoele",

  "https://zolostays.com/pg-hostel-near-kundalahalli-in-bangalore-for-men-zolo-elements-zel",

  "https://zolostays.com/hostels-in-nesapakkam-chennai",

  "https://zolostays.com/pg-hostel-near-sarjapura-in-bangalore-zolo_century-zoapol",

  "https://zolostays.com/hostels-in-challera_sec-44-noida-noida",

  "https://zolostays.com/pg-hostel-near-kharadi-in-pune-for-men-zolo-agora-zp025",

  "https://zolostays.com/hostels-in-kuniamuthur-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-madiwala_1-bangalore",

  "https://zolostays.com/pg-hostel-near-maruthi-nagar-in-bangalore-for-couples-zolo-ikigai-zik",

  "https://zolostays.com/men-pgs-in-keelkattalai-chennai",

  "https://zolostays.com/single-room-for-rent-in-sec_27_noida-noida",

  "https://zolostays.com/single-room-for-rent-in-sec-122da",

  "https://zolostays.com/single-room-for-rent-in-okhla-delhi",

  "https://zolostays.com/single-room-for-rent-in-sec_126_noida-noida",

  "https://zolostays.com/single-room-for-rent-in-koregaon_park_annexe-pune",

  "https://zolostays.com/pg-hostel-near-gowlidoddi-in-hyderabad-zolo_lakeview-zolkv",

  "https://zolostays.com/pg-hostel-near-maruthi-nagar-in-bangalore-for-couples-zolo-maverick-zmv",

  "https://zolostays.com/pg-hostel-near-hinjewadi_phase_1-in-pune-zolo_highrollers-zp033",

  "https://zolostays.com/pg-hostel-near-electronic-city-in-bangalore-zolo_selene-zosl",

  "https://zolostays.com/single-room-for-rent-in-sarvanampatty-coimbatore",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-couples-zolo-demure-zch022",

  "https://zolostays.com/pg-hostel-near-electronic_city-in-bangalore-zolo_selene-zosl",

  "https://zolostays.com/hostels-in-sus-pune",

  "https://zolostays.com/single-room-for-rent-in-sus-pune",

  "https://zolostays.com/pg-hostel-near-baner-in-pune-for-men-zolo-hobb-zp005",

  "https://zolostays.com/hostels-in-adambakkam-chennai",

  "https://zolostays.com/single-room-for-rent-in-kalapatti-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-teynampet-chennai",

  "https://zolostays.com/pg-hostel-near-hinjewadi_phase_1-in-pune-zolo_braavos-zp085",

  "https://zolostays.com/hostels-in-keshav_nagar-pune",

  "https://zolostays.com/hostels-in-lanco_hills-hyderabad",

  "https://zolostays.com/pg-hostel-near-village-hajipur_sec-104_noida-in-noida-zolo_famous-zofam",

  "https://zolostays.com/hostels-in-kodambakkam-chennai",

  "https://zolostays.com/pg-hostel-near-electronic_city_phase_1-in-bangalore-zolo_essenza-zess",

  "https://zolostays.com/single-room-for-rent-in-jagatpuriar-delhi",

  "https://zolostays.com/single-room-for-rent-in-bhandup_west-mumbai",

  "https://zolostays.com/single-room-for-rent-in-bangalore-bangalore",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-nirvana-znr",

  "https://zolostays.com/single-room-for-rent-in-adambakkam-chennai",

  "https://zolostays.com/pg-hostel-near-mogappair-in-chennai-for-couples-zolo-signature-zch029",

  "https://zolostays.com/hostels-in-btm_1st_stage-bangalore",

  "https://zolostays.com/pg-hostel-near-hinjewadi_phase_-3-in-pune-zolo_mount_view-zolmv",

  "https://zolostays.com/single-room-for-rent-in-laxmi_nagar-delhi",

  "https://zolostays.com/couple-hostels-in-btm_1st_staget-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-gandhipuram-coimbatore",

  "https://zolostays.com/pg-hostel-near-mattikere-in-bangalore-zolo_mishal-zlms",

  "https://zolostays.com/hostels-in-sec-122da",

  "https://zolostays.com/single-room-for-rent-in-thousand_lights-chennai",

  "https://zolostays.com/hostels-in-hinjewadi_phase_-3-pune",

  "https://zolostays.com/pg-hostel-near-hinjewadi_phase_1-in-pune-zolo_mist-zp009",

  "https://zolostays.com/pg-hostel-near-sarjapur-in-bangalore-zolo_belair_a-zobla",

  "https://zolostays.com/pgs-in-madiwala-bangalore",

  "https://zolostays.com/pgs-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/single-room-for-rent-in-lanco_hills-hyderabad",

  "https://zolostays.com/hostels-in-kalapatti-coimbatore",

  "https://zolostays.com/pgs-in-btm_1st_stage-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_51gurugram",

  "https://zolostays.com/pg-hostel-near-jagatpuriar-in-delhi-zolo_saber-zosb",

  "https://zolostays.com/pg-hostel-near-hinjewadi_phase_1-in-pune-zolo_sparkle-zp084",

  "https://zolostays.com/hostels-in-sec_126_noida-noida",

  "https://zolostays.com/single-room-for-rent-in-goldwins-coimbatore",

  "https://zolostays.com/hostels-in-hinjewad_phase_3-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-madiwala-bangalore",

  "https://zolostays.com/hostels-in-ayappa_societyhyderabad",

  "https://zolostays.com/hostels-in-chandivali-mumbai",

  "https://zolostays.com/pg-hostel-near-btm_1st_staget-in-bangalore-zolo_davinci-zldn",

  "https://zolostays.com/pg-hostel-near-karvenagar-in-pune-zolo_venus-zovnus",

  "https://zolostays.com/pg-hostel-near-kodihalli-in-bangalore-zolo_vruksham-zovrx",

  "https://zolostays.com/pg-hostel-near-mantaya-in-bangalore-zolo_skirling-zoskrl",

  "https://zolostays.com/single-room-for-rent-in-chandivali-mumbai",

  "https://zolostays.com/couple-hostels-in-mantaya-bangalore",

  "https://zolostays.com/hostels-in-seawoods-mumbai",

  "https://zolostays.com/single-room-for-rent-in-electronic_cityangalore",

  "https://zolostays.com/pg-hostel-near-btm_1st_stage-in-bangalore-zolo_davinci-zldn",

  "https://zolostays.com/pg-hostel-near-village-hajipurn-noida-zolo_legend-zogen",

  "https://zolostays.com/hostels-in-laxmi_nagar-delhi",

  "https://zolostays.com/pg-hostel-near-gerugambakkam-in-chennai-for-couples-zolo-apex-zch028",

  "https://zolostays.com/pg-hostel-near-kharadi-in-pune-for-men-zolo-horizon-zp013",

  "https://zolostays.com/pg-hostel-near-sec_104_noida-in-noida-zolo_newcastle-zlnc",

  "https://zolostays.com/couple-single-room-for-rent-in-marunji-pune",

  "https://zolostays.com/single-room-for-rent-in-arekere-bangalore",

  "https://zolostays.com/couple-hostels-in-kphb-hyderabad",

  "https://zolostays.com/hostels-in-turbheai-mumbai",

  "https://zolostays.com/single-room-for-rent-in-mulund-mumbai",

  "https://zolostays.com/pg-hostel-near-hinjewadi-in-pune-zolo_sheldons_spot-zsstm",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/hostels-in-chhalerada",

  "https://zolostays.com/single-room-for-rent-in-commercials_street-bangalore",

  "https://zolostays.com/pg-hostel-near-lanco_hills-in-hyderabad-zolo_autumn-zatm",

  "https://zolostays.com/men-hostels-in-santacruz_west-mumbai",

  "https://zolostays.com/single-room-for-rent-in-sector_41-gurugram",

  "https://zolostays.com/hostels-in-mulund-mumbai",

  "https://zolostays.com/single-room-for-rent-in-sector_36-noida",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-couples-zolo-ginger-zgng",

  "https://zolostays.com/hostels-in-sowbakiya_nagarmbatore",

  "https://zolostays.com/couple-single-room-for-rent-in-kondapur-hyderabad",

  "https://zolostays.com/hostels-in-near_sb_patil_school_ravet-pune",

  "https://zolostays.com/hostels-in-village-hajipurda",

  "https://zolostays.com/hostels-in-hsr-bangalore",

  "https://zolostays.com/single-room-for-rent-in-madhinaguda-hyderabad",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-women-zolo-carnations-2011",

  "https://zolostays.com/single-room-for-rent-in-avarampalayam-coimbatore",

  "https://zolostays.com/pg-hostel-near-electronic-city-in-bangalore-for-women-zolo-carnations-2011",

  "https://zolostays.com/pg-hostel-near-thoraipakkam-in-chennai-for-men-zolo-bohemia-zch014",

  "https://zolostays.com/pg-hostel-near-rajankuntte-in-bangalore-zolo_sparton-zlsptn",

  "https://zolostays.com/single-room-for-rent-in-test_locality-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-gowlidoddy-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-cv_ramanagarar-bangalore",

  "https://zolostays.com/pg-hostel-near-kphb-in-hyderabad-for-men-zolo-styx-zhd001",

  "https://zolostays.com/single-room-for-rent-in-serilingampally-hyderabad",

  "https://zolostays.com/hostels-in-cox_town-bangalore",

  "https://zolostays.com/single-room-for-rent-in-mattikere-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-wadgaon_sheri-pune",

  "https://zolostays.com/couple-hostels-in-wadgaon_sheri-pune",

  "https://zolostays.com/women-hostels-in-delhi",

  "https://zolostays.com/couple-hostels-in-kondapur-hyderabad",

  "https://zolostays.com/hostels-in-bhandup_west-mumbai",

  "https://zolostays.com/single-room-for-rent-in-karvenagar-pune",

  "https://zolostays.com/single-room-for-rent-in-ganapathy-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-nesapakkam-chennai",

  "https://zolostays.com/hostels-in-cv_ramanagarar-bangalore",

  "https://zolostays.com/hostels-in-village-hajipuroida",

  "https://zolostays.com/hostels-in-navallur-chennai",

  "https://zolostays.com/hostels-in-lanco_hills_manikonda-hyderabad",

  "https://zolostays.com/hostels-in-okhla-delhi",

  "https://zolostays.com/pg-hostel-near-nagawara-in-bangalore-zolo_epic-zoep",

  "https://zolostays.com/single-room-for-rent-in-mamura-noida-noida",

  "https://zolostays.com/single-room-for-rent-in-jspm_college_narhe-pune",

  "https://zolostays.com/single-room-for-rent-in-nagwara-bangalore",

  "https://zolostays.com/single-room-for-rent-in-agondapalli-bangalore",

  "https://zolostays.com/faqs/food-subscriptions",

  "https://zolostays.com/hostels-in-ejipura-bangalore",

  "https://zolostays.com/pg-hostel-near-navallur-in-chennai-zolo_meadow_view-zmeav",

  "https://zolostays.com/single-room-for-rent-in-sus_gaon-pune",

  "https://zolostays.com/hostels-in-raidurg-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-rajanukunte-bangalore",

  "https://zolostays.com/hostels-in-indira_nagar-bangalore",

  "https://zolostays.com/single-room-for-rent-in-phursungi-pune",

  "https://zolostays.com/hostels-in-mahipalpur-delhi",

  "https://zolostays.com/hostels-in-journalist_colony-hyderabad",

  "https://zolostays.com/hostels-in-gn_mills-coimbatore",

  "https://zolostays.com/couple-single-room-for-rent-in-delhi",

  "https://zolostays.com/hostels-in-mattikere-bangalore",

  "https://zolostays.com/pg-hostel-near-mahindra_world_city-in-chennai-zolo_crystal-zolcs",

  "https://zolostays.com/single-room-for-rent-in-uppilipalayam-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-near_sb_patil_school_ravet-pune",

  "https://zolostays.com/couple-hostels-in-gachibowli-hyderabad",

  "https://zolostays.com/hostels-in-sarvanampatty-coimbatore",

  "https://zolostays.com/hostels-in-goldwins-coimbatore",

  "https://zolostays.com/pg-hostel-near-electronic-city-in-bangalore-zolo_phoenix-zophx",

  "https://zolostays.com/pg-hostel-near-porur-in-chennai-for-couples-zolo-demure-zch022",

  "https://zolostays.com/single-room-for-rent-in-hinjewadi_phase_-3-pune",

  "https://zolostays.com/single-room-for-rent-in-gandhipuram-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-juhu-mumbai",

  "https://zolostays.com/hostels-in-mathikere-bangalore",

  "https://zolostays.com/single-room-for-rent-in-ejipura-bangalore",

  "https://zolostays.com/single-room-for-rent-in-iyyappanthangal-chennai",

  "https://zolostays.com/pgs-in-mathikere-bangalore",

  "https://zolostays.com/pg-hostel-near-manyata-in-bangalore-for-men-zolo-odyssey-2016",

  "https://zolostays.com/hostels-in-valasaravakkam-chennai",

  "https://zolostays.com/faqs/laptop-tray-table",

  "https://zolostays.com/hostels-in-nagwara-bangalore",

  "https://zolostays.com/single-room-for-rent-in-bund_garden-pune",

  "https://zolostays.com/hostels-in-nizampet-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-nizampet-hyderabad",

  "https://zolostays.com/pg-hostel-near-cox_town-in-bangalore-zolo_campbell-zocmbl",

  "https://zolostays.com/hostels-in-gandhipuram-coimbatore",

  "https://zolostays.com/pg-hostel-near-hinjewadi-in-pune-zolo_iterno-zolit",

  "https://zolostays.com/hostels-in-malad-mumbai",

  "https://zolostays.com/single-room-for-rent-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/hostels-in-madhinaguda-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-wagholi-pune",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-couples-zolo-carnations-2011",

  "https://zolostays.com/men-hostels-in-gandhipuram-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-btm_stage_2-bangalore",

  "https://zolostays.com/hostels-in-btm_stage_2-bangalore",

  "https://zolostays.com/hostels-in-santacruz_west-mumbai",

  "https://zolostays.com/pg-hostel-near-nagawara-in-bangalore-for-men-zolo-epic-zoep",

  "https://zolostays.com/single-room-for-rent-in-santacruz_west-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-gachibowli-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-manikonda-hyderabad",

  "https://zolostays.com/pg-hostel-near-wakad-in-pune-for-men-zolo-legacy-zp029",

  "https://zolostays.com/single-room-for-rent-in-noida_sec_63_a-noida",

  "https://zolostays.com/single-room-for-rent-in-journalist_colony-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-eachanari-coimbatore",

  "https://zolostays.com/hostels-in-eachanari-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-karol_bagh-delhi",

  "https://zolostays.com/hostels-in-karol_bagh-delhi",

  "https://zolostays.com/pg-hostel-near-navallur-in-chennai-zolo_dreamtown-zldt",

  "https://zolostays.com/hostels-in-teynampet-chennai",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-women-zolo-rainbow-for-women-zp015",

  "https://zolostays.com/pg-hostel-near-maruthi_nagar_btm-in-bangalore-zolo_columbus-zoclmbs",

  "https://zolostays.com/pg-hostel-near-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/hostels-in-rajanukunte-bangalore",

  "https://zolostays.com/hostels-in-hebbal-bangalore",

  "https://zolostays.com/pg-hostel-near-nagavara-in-bangalore-zolo_forza-zofo",

  "https://zolostays.com/hostels-in-koregaon_park_annexe-pune",

  "https://zolostays.com/single-room-for-rent-in-marunji-pune",

  "https://zolostays.com/pgs-in-sector_41-gurugram",

  "https://zolostays.com/single-room-for-rent-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/couple-hostels-in-gn_mills-coimbatore",

  "https://zolostays.com/pg-hostel-near-gowlidoddy-in-hyderabad-for-men-zolo-fortuna-zhd002",

  "https://zolostays.com/pg-hostel-near-hinjewad_phase_3-in-pune-zolo_you_57-zoyou",

  "https://zolostays.com/single-room-for-rent-in-chunabhattiai",

  "https://zolostays.com/couple-hostels-in-west_saidapet-chennai",

  "https://zolostays.com/single-room-for-rent-in-kodambakkam-chennai",

  "https://zolostays.com/hostels-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/single-room-for-rent-in-mugalivakkam-chennai",

  "https://zolostays.com/hostels-in-mugalivakkam-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-jspm_college_narhe-pune",

  "https://zolostays.com/hostels-in-tilak_nagar-bangalore",

  "https://zolostays.com/hostels-in-wagholi-pune",

  "https://zolostays.com/single-room-for-rent-in-madiwala-bangalore",

  "https://zolostays.com/hostels-in-commercials_street-bangalore",

  "https://zolostays.com/single-room-for-rent-in-keshav_nagar-pune",

  "https://zolostays.com/hostels-in-arekere_hulimavu-bangalore",

  "https://zolostays.com/men-hostels-in-dhankawadi-pune",

  "https://zolostays.com/single-room-for-rent-in-jeevan_bima_nagar-bangalore",

  "https://zolostays.com/pg-hostel-near-marathahalli-in-bangalore-for-couples-zolo-ginger-zgng",

  "https://zolostays.com/single-room-for-rent-in-powai-mumbai",

  "https://zolostays.com/hostels-in-thousand_lights-chennai",

  "https://zolostays.com/single-room-for-rent-in-rajankuntte-bangalore",

  "https://zolostays.com/hostels-in-powai-mumbai",

  "https://zolostays.com/single-room-for-rent-in-btm-bangalore",

  "https://zolostays.com/couple-hostels-in-sector_53-noida",

  "https://zolostays.com/couple-hostels-in-kormangala_1st_block-bangalore",

  "https://zolostays.com/pg-hostel-near-munokella_marathalli-in-bangalore-zolo_laurel_b-zorelb",

  "https://zolostays.com/single-room-for-rent-in-raidurg-hyderabad",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-mustard-zmd",

  "https://zolostays.com/hostels-in-ganapathy-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-kengeri-bangalore",

  "https://zolostays.com/hostels-in-manikonda-hyderabad",

  "https://zolostays.com/single-room-for-rent-in-manikonda-hyderabad",

  "https://zolostays.com/hostels-in-sus_gaon-pune",

  "https://zolostays.com/hostels-in-jeevan_bima_nagar-bangalore",

  "https://zolostays.com/single-room-for-rent-in-punawale-pune",

  "https://zolostays.com/couple-hostels-in-loni_kalbhor-pune",

  "https://zolostays.com/hostels-in-yeshwanthpur-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-madhinaguda-hyderabad",

  "https://zolostays.com/hostels-in-yewalewadi_kondwa-pune",

  "https://zolostays.com/pg-hostel-near-r_t_nagar-in-bangalore-zolo_moonshine-zomns",

  "https://zolostays.com/single-room-for-rent-in-hinjewad_phase_3-pune",

  "https://zolostays.com/pgs-in-btm_1st_stage-bangalore",

  "https://zolostays.com/pgs-in-noida_sec_63_a-noida",

  "https://zolostays.com/single-room-for-rent-in-arekere_hulimavu-bangalore",

  "https://zolostays.com/single-room-for-rent-in-jigani-bangalore",

  "https://zolostays.com/hostels-in-maruthi_nagar_btm-bangalore",

  "https://zolostays.com/couple-hostels-in-chakan_bhamboli-pune",

  "https://zolostays.com/couple-hostels-in-arekere-bangalore",

  "https://zolostays.com/hostels-in-punawale-pune",

  "https://zolostays.com/pg-hostel-near-kodambakkam-in-chennai-zolo_zion-zlzn",

  "https://zolostays.com/hostels-in-talegaon-pune",

  "https://zolostays.com/hostels-in-sarjapura-bangalore",

  "https://zolostays.com/single-room-for-rent-in-talegaon-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-kphb-hyderabad",

  "https://zolostays.com/hostels-in-jspm_college_narhe-pune",

  "https://zolostays.com/hostels-in-bund_garden-pune",

  "https://zolostays.com/single-room-for-rent-in-radha_reddy_layout-bangalore",

  "https://zolostays.com/hostels-in-sarjapur_road-bangalore",

  "https://zolostays.com/hostels-in-marunji-pune",

  "https://zolostays.com/single-room-for-rent-in-loni_kalbhor-pune",

  "https://zolostays.com/hostels-in-loni_kalbhor-pune",

  "https://zolostays.com/hostels-in-arekere-bangalore",

  "https://zolostays.com/single-room-for-rent-in-west_saidapet-chennai",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-cinnamon-zcn",

  "https://zolostays.com/pg-hostel-near-marathahalli-in-bangalore-for-men-zolo-cinnamon-zcn",

  "https://zolostays.com/hostels-in-phursungi-pune",

  "https://zolostays.com/pg-hostel-near-hinjewadi-in-pune-zolo_arsenal-zp076",

  "https://zolostays.com/women-single-room-for-rent-in-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-journalist_colony-hyderabad",

  "https://zolostays.com/hostels-in-iyyappanthangal-chennai",

  "https://zolostays.com/pg-hostel-near-talegaon-in-pune-zolo_namrata-zlnr",

  "https://zolostays.com/hostels-in-alandur-chennai",

  "https://zolostays.com/single-room-for-rent-in-alandur-chennai",

  "https://zolostays.com/hostels-in-pimple_nilakh-pune",

  "https://zolostays.com/single-room-for-rent-in-pimple_nilakh-pune",

  "https://zolostays.com/single-room-for-rent-in-gn_mills-coimbatore",

  "https://zolostays.com/couple-hostels-in-guindy-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-maruthi_nagar_btm-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-radha_reddy_layout-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-arekere-bangalore",

  "https://zolostays.com/hostels-in-radha_reddy_layoutroad-bangalore",

  "https://zolostays.com/pg-hostel-near-banerne-for-men-zolo-house-of-black-beard-zp005",

  "https://zolostays.com/hostels-in-uppilipalayam-coimbatore",

  "https://zolostays.com/pg-hostel-near-electronic-city-in-bangalore-for-couples-zolo-essenza-zess",

  "https://zolostays.com/women-hostels-in-nungambakkam-chennai",

  "https://zolostays.com/hostels-in-sowbakiya_nagar-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-testtest-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-yewalewadi_kondwa-pune",

  "https://zolostays.com/couple-hostels-in-testtest-coimbatore",

  "https://zolostays.com/men-pgs-in-ganapathy-coimbatore",

  "https://zolostays.com/couple-hostels-in-thousand_lights-chennai",

  "https://zolostays.com/men-hostels-in-alandur-chennai",

  "https://zolostays.com/men-hostels-in-jb_nagar_andheri-mumbai",

  "https://zolostays.com/men-hostels-in-pimple_nilakh-pune",

  "https://zolostays.com/men-pgs-in-avarampalayam-coimbatore",

  "https://zolostays.com/men-hostels-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/men-hostels-in-keshav_nagar-pune",

  "https://zolostays.com/men-hostels-in-gn_mills-coimbatore",

  "https://zolostays.com/men-pgs-in-sowbakiya_nagar-coimbatore",

  "https://zolostays.com/men-hostels-in-bhandup_west-mumbai",

  "https://zolostays.com/men-pgs-in-bhandup_west-mumbai",

  "https://zolostays.com/men-hostels-in-sarvanampatty-coimbatore",

  "https://zolostays.com/men-hostels-in-koregaon_park_annexe-pune",

  "https://zolostays.com/men-pgs-in-gandhipuram-coimbatore",

  "https://zolostays.com/men-hostels-in-loni_kalbhor-pune",

  "https://zolostays.com/men-hostels-in-sowbakiya_nagar-coimbatore",

  "https://zolostays.com/men-pgs-in-eachanari-coimbatore",

  "https://zolostays.com/men-hostels-in-electronic_city_phase_1-bangalore",

  "https://zolostays.com/men-pgs-in-electronic_city_phase_1-bangalore",

  "https://zolostays.com/men-pgs-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/men-hostels-in-walhekar_wadi-pune",

  "https://zolostays.com/men-hostels-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/men-hostels-in-malad-mumbai",

  "https://zolostays.com/men-pgs-in-malad-mumbai",

  "https://zolostays.com/men-pgs-in-alandur-chennai",

  "https://zolostays.com/men-hostels-in-talegaon-pune",

  "https://zolostays.com/men-pgs-in-wadgoan_sheri-pune",

  "https://zolostays.com/men-pgs-in-gn_mills-coimbatore",

  "https://zolostays.com/men-hostels-in-rajanukunte-bangalore",

  "https://zolostays.com/men-pgs-in-nagavara-bangalore",

  "https://zolostays.com/men-hostels-in-avarampalayam-coimbatore",

  "https://zolostays.com/men-hostels-in-kalapatti-coimbatore",

  "https://zolostays.com/men-pgs-in-koregaon_park_annexe-pune",

  "https://zolostays.com/men-pgs-in-keshav_nagar-pune",

  "https://zolostays.com/men-pgs-in-bommasandra-bangalore",

  "https://zolostays.com/men-pgs-in-rajanukunte-bangalore",

  "https://zolostays.com/men-hostels-in-powai-mumbai",

  "https://zolostays.com/men-hostels-in-eachanari-coimbatore",

  "https://zolostays.com/men-pgs-in-sarvanampatty-coimbatore",

  "https://zolostays.com/men-pgs-in-jb_nagar_andheri-mumbai",

  "https://zolostays.com/men-pgs-in-walhekar_wadi-pune",

  "https://zolostays.com/men-pgs-in-loni_kalbhor-pune",

  "https://zolostays.com/men-hostels-in-goldwins-coimbatore",

  "https://zolostays.com/men-hostels-in-ganapathy-coimbatore",

  "https://zolostays.com/men-pgs-in-kalapatti-coimbatore",

  "https://zolostays.com/men-hostels-in-wadgoan_sheri-pune",

  "https://zolostays.com/men-pgs-in-santacruz_west-mumbai",

  "https://zolostays.com/men-pgs-in-pimple_nilakh-pune",

  "https://zolostays.com/men-pgs-in-talegaon-pune",

  "https://zolostays.com/men-hostels-in-bommasandra-bangalore",

  "https://zolostays.com/men-hostels-in-nagavara-bangalore",

  "https://zolostays.com/men-pgs-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/men-pgs-in-powai-mumbai",

  "https://zolostays.com/men-pgs-in-goldwins-coimbatore",

  "https://zolostays.com/pg-hostel-near-wakad-in-pune-for-men-zolo-rainbow-for-men-zp017",

  "https://zolostays.com/pg-hostel-near-bellandur-in-bangalore-for-men-zolo-nirvana-znr",

  "https://zolostays.com/couple-hostels-in-madiwala-bangalore",

  "https://zolostays.com/pg-hostel-near-1st-stage%252525252525252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/women-hostels-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/women-hostels-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/women-pgs-in-rajanukunte-bangalore",

  "https://zolostays.com/women-pgs-in-mathikere-bangalore",

  "https://zolostays.com/women-pgs-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/women-hostels-in-rajanukunte-bangalore",

  "https://zolostays.com/women-pgs-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/women-pgs-in-kengeri-bangalore",

  "https://zolostays.com/women-hostels-in-mathikere-bangalore",

  "https://zolostays.com/women-hostels-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/women-hostels-in-walhekar_wadi-pune",

  "https://zolostays.com/women-pgs-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/women-hostels-in-kengeri-bangalore",

  "https://zolostays.com/women-pgs-in-walhekar_wadi-pune",

  "https://zolostays.com/couple-hostels-in-teynampet-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_53-noida",

  "https://zolostays.com/couple-hostels-in-radha_reddy_layout-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-okhla-delhi",

  "https://zolostays.com/single-room-for-rent-in-navallur-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-west_saidapet-chennai",

  "https://zolostays.com/pg-hostel-near-1st-stage%25252525252525252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/couple-hostels-in-madhinaguda-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-chandivali-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-punawale-pune",

  "https://zolostays.com/couple-hostels-in-yeshwanthpur-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-nagavara-bangalore",

  "https://zolostays.com/couple-hostels-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-teynampet-chennai",

  "https://zolostays.com/couple-hostels-in-tilak_nagar-bangalore",

  "https://zolostays.com/couple-hostels-in-sion-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-indiranagar-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-serilingampally-hyderabad",

  "https://zolostays.com/couple-hostels-in-bangalore-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-rajanukunte-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-phursungi-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-mathikere-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_104-noida",

  "https://zolostays.com/couple-hostels-in-electronic_city_phase_1-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-btm_1st_stage-bangalore",

  "https://zolostays.com/couple-hostels-in-cv_ramanagar-bangalore",

  "https://zolostays.com/couple-hostels-in-mathikere-bangalore",

  "https://zolostays.com/couple-hostels-in-sarjapura-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-tilak_nagar-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-hitec_city-hyderabad",

  "https://zolostays.com/couple-hostels-in-marunji-pune",

  "https://zolostays.com/couple-hostels-in-hsr-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-rr_nagar-bangalore",

  "https://zolostays.com/couple-hostels-in-iyyappanthangal-chennai",

  "https://zolostays.com/couple-hostels-in-btm_1st_stage-bangalore",

  "https://zolostays.com/couple-hostels-in-jeevan_bima_nagar-bangalore",

  "https://zolostays.com/couple-hostels-in-kodambakkam-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-nesapakkam-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-mugalivakkam-chennai",

  "https://zolostays.com/couple-hostels-in-indira_nagar-bangalore",

  "https://zolostays.com/couple-hostels-in-journalist_colony-hyderabad",

  "https://zolostays.com/couple-hostels-in-indiranagar-bangalore",

  "https://zolostays.com/couple-hostels-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/couple-hostels-in-manikonda-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-hinjewadi_phase_1-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-chakan_bhamboli-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-loni_kalbhor-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-turbheai-mumbai",

  "https://zolostays.com/couple-hostels-in-laxmi_nagar-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-mamura_sector_66-noida-noida",

  "https://zolostays.com/couple-hostels-in-phursungi-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-bangalore-bangalore",

  "https://zolostays.com/couple-hostels-in-avarampalayam-coimbatore",

  "https://zolostays.com/couple-hostels-in-maruthi_nagar_btm-bangalore",

  "https://zolostays.com/couple-hostels-in-ejipura-bangalore",

  "https://zolostays.com/couple-hostels-in-delhi-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-sarjapura-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-tanisandra-bangalore",

  "https://zolostays.com/couple-hostels-in-okhla-delhi",

  "https://zolostays.com/couple-hostels-in-sector_46-noida",

  "https://zolostays.com/couple-single-room-for-rent-in-sec_126_noida-noida",

  "https://zolostays.com/couple-hostels-in-hitec_city-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-hsr-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-delhi-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-avarampalayam-coimbatore",

  "https://zolostays.com/couple-single-room-for-rent-in-electronic_city_phase_1-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-jeevan_bima_nagar-bangalore",

  "https://zolostays.com/couple-hostels-in-mugalivakkam-chennai",

  "https://zolostays.com/couple-hostels-in-jspm_college_narhe-pune",

  "https://zolostays.com/couple-hostels-in-dwarka-delhi",

  "https://zolostays.com/couple-hostels-in-sector_35-noida",

  "https://zolostays.com/couple-hostels-in-lanco_hills_manikonda-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-cv_ramanagar-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-yeshwanthpur-bangalore",

  "https://zolostays.com/couple-hostels-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_46-noida",

  "https://zolostays.com/couple-hostels-in-sector_51gurugram",

  "https://zolostays.com/couple-single-room-for-rent-in-electronic_city_phase_2-bangalore",

  "https://zolostays.com/couple-hostels-in-chandivali-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-testtest-coimbatore",

  "https://zolostays.com/couple-hostels-in-sector_104-noida",

  "https://zolostays.com/couple-single-room-for-rent-in-iyyappanthangal-chennai",

  "https://zolostays.com/couple-hostels-in-nagavara-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-kodambakkam-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-mantaya-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-kormangala_1st_block-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-hinjewadi_phase_3-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-laxmi_nagar-delhi",

  "https://zolostays.com/couple-single-room-for-rent-in-dwarka-delhi",

  "https://zolostays.com/couple-hostels-in-rajanukunte-bangalore",

  "https://zolostays.com/couple-hostels-in-nesapakkam-chennai",

  "https://zolostays.com/couple-hostels-in-sec_126_noida-noida",

  "https://zolostays.com/couple-single-room-for-rent-in-indira_nagar-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-lanco_hills_manikonda-hyderabad",

  "https://zolostays.com/couple-hostels-in-mamura_sector_66-noida-noida",

  "https://zolostays.com/couple-hostels-in-punawale-pune",

  "https://zolostays.com/couple-hostels-in-serilingampally-hyderabad",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_35-noida",

  "https://zolostays.com/couple-hostels-in-tanisandra-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-gn_mills-coimbatore",

  "https://zolostays.com/single-room-for-rent-in-mantaya-bangalore",

  "https://zolostays.com/pgs-in-electronic_cityangalore",

  "https://zolostays.com/single-room-for-rent-in-sec_104_noida-noida",

  "https://zolostays.com/pg-hostel-near-btm-layout-in-bangalore-for-men-zolo-optimus-zopm",

  "https://zolostays.com/single-room-for-rent-in-challerada-noida",

  "https://zolostays.com/pg-hostel-near-hsr-layout-in-bangalore-for-couples-zolo-elysium-zely",

  "https://zolostays.com/pg-hostel-near-kottivakkam-in-chennai-for-men-zolo-playa-zch026",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-house-of-black-beard-zp005",

  "https://zolostays.com/pg-hostel-near-hinjewadi-in-pune-for-women-zolo-mist-zp009",

  "https://zolostays.com/women-hostels-in-hadapsar-pune",

  "https://zolostays.com/women-hostels-in-talawade-pune",

  "https://zolostays.com/single-room-for-rent-in-walhekar_wadi-pune",

  "https://zolostays.com/single-room-for-rent-in-thirumalayampalayam-coimbatore",

  "https://zolostays.com/hostels-in-testtest-coimbatore",

  "https://zolostays.com/men-single-room-for-rent-in-sanjay_nagar-bangalore",

  "https://zolostays.com/hostels-in-gowlidoddi-hyderabad",

  "https://zolostays.com/men-pgs-in-sp_kovil-in-chennai",

  "https://zolostays.com/hostels-in-govandi-mumbai",

  "https://zolostays.com/pg-hostel-near-rmvgar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/pg-hostel-near-rmv%2c-sanjay-nagar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/pg-hostel-near-rmv%252c-sanjay-nagar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/hostels-in-bkc_mumbai-mumbai",

  "https://zolostays.com/hostels-in-sec_27_noida-noida",

  "https://zolostays.com/hostels-in-radha_reddy_layout-bangalore",

  "https://zolostays.com/pgs-in-munokella-bangalore",

  "https://zolostays.com/women-hostels-in-sanjay_nagar-bangalore",

  "https://zolostays.com/hostels-in-juhu-mumbai",

  "https://zolostays.com/single-room-for-rent-in-sector_51gurugram",

  "https://zolostays.com/hostels-in-rajankuntte-bangalore",

  "https://zolostays.com/single-room-for-rent-in-seawoods-mumbai",

  "https://zolostays.com/women-hostels-in-vadgaon_budruk-pune",

  "https://zolostays.com/single-room-for-rent-in-chhalerada",

  "https://zolostays.com/hostels-in-mantaya-bangalore",

  "https://zolostays.com/hostels-in-munokella_marathalli-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-parel-mumbai",

  "https://zolostays.com/pg-hostel-near-1st-stage%2525252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/pg-hostel-near-1st-stage%252525252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/couple-hostels-in-peelamedu-coimbatore",

  "https://zolostays.com/couple-single-room-for-rent-in-hadapsar-pune",

  "https://zolostays.com/hostels-in-r_t_nagar-bangalore",

  "https://zolostays.com/pg-hostel-near-hsr-layout-in-bangalore-for-men-zolo-park-view-2004",

  "https://zolostays.com/hostels-in-rr-bangalore",

  "https://zolostays.com/hostels-in-thirumalayampalayam-coimbatore",

  "https://zolostays.com/women-single-room-for-rent-in-sanjay_nagar-bangalore",

  "https://zolostays.com/couple-single-room-for-rent-in-peelamedu-coimbatore",

  "https://zolostays.com/pg-hostel-near-1st-staget-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/pg-hostel-near-1st-stage%2c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/single-room-for-rent-in-village-hajipuroida",

  "https://zolostays.com/single-room-for-rent-in-kaliyapuram-coimbatore",

  "https://zolostays.com/hostels-in-talwandi-kota",

  "https://zolostays.com/single-room-for-rent-in-t_m_palayam-coimbatore",

  "https://zolostays.com/men-hostels-in-anna_nagar-chennai",

  "https://zolostays.com/pgs-in-kuthambakkam-in-chennai",

  "https://zolostays.com/single-room-for-rent-in-sec_53_noida-noida",

  "https://zolostays.com/sitemap/sitemap",

  "https://zolostays.com/couple-hostels-in-chembur-mumbai",

  "https://zolostays.com/pg-hostel-near-rmv%25252c-sanjay-nagar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/pg-hostel-near-electronic-city-in-bangalore-for-men-zolo-euphoria-2006",

  "https://zolostays.com/single-room-for-rent-in-test_locality-bangalore",

  "https://zolostays.com/hostels-in-s_g_palya-bangalore",

  "https://zolostays.com/hostels-in-hoodi_junction",

  "https://zolostays.com/women-hostels-in-tathawade-pune",

  "https://zolostays.com/pg-hostel-near-nagawara-in-bangalore-for-men-zolo-forza-zofo",

  "https://zolostays.com/couple-hostels-in-dadabari-kota",

  "https://zolostays.com/women-single-room-for-rent-in-wadgaon_sheri-pune",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-couples-zolo-renaissance-zore",

  "https://zolostays.com/hostels-in-wadgoan_sheri-pune",

  "https://zolostays.com/pg-hostel-near-koramangala-in-bangalore-for-men-zolo-mitra-zmt",

  "https://zolostays.com/single-room-for-rent-in-nandamabakam-chennai",

  "https://zolostays.com/women-pgs-in-hinjewadi-city-pune",

  "https://zolostays.com/single-room-for-rent-in-talwandi-kota",

  "https://zolostays.com/single-room-for-rent-in-wadgoan_sheri-pune",

  "https://zolostays.com/hostels-in-electronic_city",

  "https://zolostays.com/single-room-for-rent-in-lanco_hills",

  "https://zolostays.com/hostels-in-chhalera",

  "https://zolostays.com/single-room-for-rent-in-village-hajipur",

  "https://zolostays.com/single-room-for-rent-in-chhalera",

  "https://zolostays.com/single-room-for-rent-in-chunabhatti",

  "https://zolostays.com/hostels-in-sec-122",

  "https://zolostays.com/single-room-for-rent-in-sec-122",

  "https://zolostays.com/hostels-in-village-hajipur",

  "https://zolostays.com/hostels-in-chunabhatti",

  "https://zolostays.com/couple-hostels-in-nungambakkam-chennai",

  "https://zolostays.com/couple-single-room-for-rent-in-sector_19-noida",

  "https://zolostays.com/couple-hostels-in-kota",

  "https://zolostays.com/pg-hostel-near-1st-stage%252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/pg-hostel-near-1st-stage%25252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/couple-hostels-in-electronic_complex-kota",

  "https://zolostays.com/pg-hostel-near-mylasandrabli-in-bangalore-for-men-zolo-zephyr-zoze",

  "https://zolostays.com/women-hostels-in-santacruz-mumbai",

  "https://zolostays.com/pg-hostel-near-mylasandra%2ckengeri-hobli-in-bangalore-for-men-zolo-zephyr-zoze",

  "https://zolostays.com/hostels-in-village-hajipur_sec-104-noida",

  "https://zolostays.com/sitemap/faqs",

  "https://zolostays.com/pg-hostel-near-sowbakiya_nagarcoimbatore-zolo_delta-zlda",

  "https://zolostays.com/women-single-room-for-rent-in-kurla_west-mumbai",

  "https://zolostays.com/women-hostels-in-kotturpuram-chennai",

  "https://zolostays.com/hostels-in-lanco_hills",

  "https://zolostays.com/women-single-room-for-rent-in-thane-mumbai",

  "https://zolostays.com/single-room-for-rent-in-sinhagad_college_wadgoan",

  "https://zolostays.com/single-room-for-rent-in-jagatpuri",

  "https://zolostays.com/sitemap/propertyurl",

  "https://zolostays.com/pg-hostel-near-r-city-mall%25252525252c-ghatkopar-in-mumbai-for-men-zolo-address-zmm005",

  "https://zolostays.com/women-single-room-for-rent-in-andheri_east-mumbai",

  "https://zolostays.com/couple-hostels-in-kurla_west-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-kurla_west-mumbai",

  "https://zolostays.com/women-single-room-for-rent-in-santacruz-mumbai",

  "https://zolostays.com/hostels-in-sec_53_noida-noida",

  "https://zolostays.com/men-hostels-in-kotturpuram-chennai",

  "https://zolostays.com/men-pgs-in-baner%2525252525252cpune-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-vadgaon_budruk-pune",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-kings-landing-zp001",

  "https://zolostays.com/women-pgs-in-manyata-chandigarh",

  "https://zolostays.com/women-hostels-in-andheri_east-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-kota",

  "https://zolostays.com/men-single-room-for-rent-in-vadgaon_sheri-pune",

  "https://zolostays.com/women-hostels-in-wadgaon_sheri-pune",

  "https://zolostays.com/pg-hostel-near-t-block%252525252525252c-dlf-phase-3-in-gurugram-for-couples-zolo-avenue-zgg003",

  "https://zolostays.com/pg-hostel-near-kharadi-in-pune-for-couples-zolo-altius-zp020",

  "https://zolostays.com/women-single-room-for-rent-in-soladevanahalli-bangalore",

  "https://zolostays.com/pg-hostel-near-rmv%252525252c-sanjay-nagar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/couple-hostels-in-indra_vihar-kota",

  "https://zolostays.com/pg-hostel-near-rajarajeshwari-nagar-in-bangalore-for-couples-zolo-iris-zirs",

  "https://zolostays.com/couple-hostels-in-hadapsar-pune",

  "https://zolostays.com/men-single-room-for-rent-in-kotturpuram-chennai",

  "https://zolostays.com/couple-hostels-in-talawade-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-kurla-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-tathawade-pune",

  "https://zolostays.com/couple-single-room-for-rent-in-talawade-pune",

  "https://zolostays.com/men-hostels-in-sector_19-noida",

  "https://zolostays.com/hostels-in-t_m_palayam-coimbatore",

  "https://zolostays.com/pg-hostel-near-rmv%25252525252c-sanjay-nagar-in-bangalore-for-couples-zolo-paradise-zopds",

  "https://zolostays.com/couple-hostels-in-kurla-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-sion-mumbai",

  "https://zolostays.com/couple-hostels-in-gowlidoddy-hyderabad",

  "https://zolostays.com/pg-hostel-near-baner%25252cpune-in-pune-for-men-zolo-house-of-black-beard-zp005",

  "https://zolostays.com/couple-hostels-in-sector_71-noida",

  "https://zolostays.com/pg-hostel-near-r-city-mall%252c-ghatkopar-in-mumbai-for-men-zolo-address-zmm005",

  "https://zolostays.com/single-room-for-rent-in-valasaravakkam-chennai",

  "https://zolostays.com/women-hostels-in-immadahalli-bangalore",

  "https://zolostays.com/couple-hostels-in-vadgaon_budruk-pune",

  "https://zolostays.com/pg-hostel-near-1st-stage%2525252525252c-btm-layout-in-bangalore-for-men-zolo-hibiscus-2010",

  "https://zolostays.com/pgs-in-1st_stage%2525252525252c_btm_layout-bangalore",

  "https://zolostays.com/women-single-room-for-rent-in-kotturpuram-chennai",

  "https://zolostays.com/women-single-room-for-rent-in-kattankulathur-chennai",

  "https://zolostays.com/women-single-room-for-rent-in-mulund_west-mumbai",

  "https://zolostays.com/pg-hostel-near-undefined-in-undefined-for-men-zolo-skyfall-zsf",

  "https://zolostays.com/couple-hostels-in-soladevanahalli-bangalore",

  "https://zolostays.com/women-hostels-in-mulund_west-mumbai",

  "https://zolostays.com/couple-single-room-for-rent-in-dadabari-kota",

  "https://zolostays.com/couple-single-room-for-rent-in-landmark_city-kota",

  "https://zolostays.com/pg-hostel-near-mylasandra%25252525252ckengeri-hobli-in-bangalore-for-men-zolo-zephyr-zoze",

  "https://zolostays.com/couple-pgs-in-santacruz-mumbai",

  "https://zolostays.com/pg-hostel-near-R-city-Mall%2525252525252C-Ghatkopar-in-Mumbai-for-men-Zolo-Address-ZMM005",

  "https://zolostays.com/couple-pgs-in-karve_nagar%25252cpune-pune",

  "https://zolostays.com/pgs-in-neelankarai-:city",

  "https://zolostays.com/pgs-in-kurla_west-chennai)",

  "https://zolostays.com/men-pgs-in-baner%25252525252cpune-pune",

  "https://zolostays.com/pgs-in-hinjewadi%252Cpune-pune",

  "https://zolostays.com/pgs-in-hinjewadi%25252Cpune-pune",

  "https://zolostays.com/men-single-room-for-rent-in-sector_61-noida",
  "https://zolostays.com/women-hostels-in-vadgaon_sheri-pune",
];

const onlyPlpUrls = arr.filter((url) => !url.includes("pg-hostel-near"));
// console.log("onlyPlpUrls ", onlyPlpUrls);

const writeStream = fs.createWriteStream("onlyPlpUrls.txt");

// write to file
onlyPlpUrls.forEach((url) => {
  writeStream.write(`${url}\n`);
});

writeStream.end();

// write to file end



module.exports = arr;





