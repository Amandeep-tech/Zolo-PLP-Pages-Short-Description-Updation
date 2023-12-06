const fs = require("fs");

const jsonArr = [
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad5d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad62",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad67",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad6c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad71",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad76",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad5f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad64",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad69",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad6e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad73",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad78",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad7b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad5e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad80",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad7d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad63",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad85",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad82",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad68",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad87",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad6d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad72",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad77",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad7c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad81",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad86",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad91",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad96",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad9b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddada0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad94",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddada5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad99",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad95",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad9e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadaa",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddada3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadaf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad9a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadb4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddada8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad9f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddada4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadad",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadb9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadb2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadbe",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddada9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadae",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddadc3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadb7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad61",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadb3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadbc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari%2520nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadc8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad66",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadb8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad6b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddadc1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadcd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad70",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddadd2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur%2520road-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadc6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadbd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-taverekare-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadcb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddadc2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad75",
  },
  {
    og_url: "",
    urlPath: "pgs-in-baner-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadd7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-2-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddadd0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad7a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadc7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr%2520layout-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadd5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad7f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tawarakere-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadcc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadd1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad84",
  },
  {
    og_url: "",
    urlPath: "pgs-in-mahalunge-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddadd6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad93",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad98",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad9d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddada2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddada7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadac",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadb1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddadb6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadbb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddadc0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddadc5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarkere-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadca",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-2-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadcf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddadd4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddadeb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadf0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadfa",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadff",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae04",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae09",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae0e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae13",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddae18",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nillangarai-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae1d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae22",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddade9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae27",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadee",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadf3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadfd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae02",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae07",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddadea",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae0c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae11",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadef",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae16",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddae1b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadfe",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae20",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae25",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae63",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae03",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae68",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae08",
  },
  {
    og_url: "",
    urlPath: "pgs-in-kundalahalli-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae2a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddade8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae0d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae6d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddaded",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae72",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae12",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadf2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddae17",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae77",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddae1c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae7c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadfc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari%2520nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae21",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae01",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae81",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae26",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae86",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae06",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae8b",
  },
  {
    og_url: "",
    urlPath: "pgs-in-electronic-city-2-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae2b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae0b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae10",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae90",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae15",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae95",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur%2520road-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae1a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae9a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae61",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae9f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tawarakere-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae1f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddaea4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-2-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae24",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae66",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae6b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae29",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur%2520road-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaea9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae70",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tawarakere-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeae",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-1-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae75",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae7a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae7f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae84",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae62",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae67",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae89",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae6c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae8e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae93",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae71",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae98",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae76",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae9d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae7b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae60",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae80",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddaea2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddaea7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae85",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae65",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae8a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattupakkam-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeac",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae6a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae8f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae6f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae94",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae74",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae79",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae99",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae7e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae9e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddaea3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae83",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae88",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddaea8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae8d",
  },
  {
    og_url: "",
    urlPath: "pgs-in-viman_nagar-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaf0d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarkere-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddaead",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae92",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-1-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr%2520layout-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae97",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae9c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddaea1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddaea6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt%2520nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaeab",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt%2520nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb5",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sg-palya-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaeba",
  },
  {
    og_url: "",
    urlPath: "pgs-in-tavarekere-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddaf0b",
  },
  {
    og_url: "",
    urlPath: "pgs-in-nolambur_mogappair_west-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaf10",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test_localityyy-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddaf5d",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sdfsd-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaf0c",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddaf0f",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sector_44-delhi",
    metaInfo_id: "5eb6b5b1d45c502925ddaf94",
  },
  {
    og_url: "",
    urlPath: "pgs-in-nolambur_mogappair_west-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaf99",
  },
  {
    og_url: "",
    urlPath: "pgs-in-avarampalayam-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddaf98",
  },
  {
    og_url: "",
    urlPath: "pgs-in-dsd-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb025",
  },
  {
    og_url: "",
    urlPath: "pgs-in-testlocality-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb02a",
  },
  {
    og_url: "",
    urlPath: "pgs-in-spice_garden-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddaf96",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb029",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test_location-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddafe6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0a7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ac",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b6",
  },
  {
    og_url: "",
    urlPath: "pgs-in-koramangala_5th_block-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddaf97",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0bb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ca",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0cf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d4",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sector_26-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb027",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0de",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur%2520road-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ed",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-taverekare-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-1-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0a6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr%2520layout-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0fc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ab",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ba",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0bf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ce",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-test_location-in-gurugram-test_qa_property_2-zrp",
    metaInfo_id: "5eb6b5b1d45c502925ddb077",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0dd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ec",
  },
  {
    og_url: "",
    urlPath: "pgs-in-neb_sarai-delhi",
    metaInfo_id: "5eb6b5b1d45c502925ddb13d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarkere-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune%2520nagar%2520road-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0fb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0a9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ae",
  },
  {
    og_url: "",
    urlPath: "pgs-in-cox_town-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb028",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0bd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0cc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0db",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e0",
  },
  {
    og_url: "",
    urlPath:
      "pg-hostel-near-test_localityyy-in-coimbatore-test_qa_property_1-zosf",
    metaInfo_id: "5eb6b5b2d45c502925ddb18d",
  },
  {
    og_url: "",
    urlPath: "pgs-in-koramangala-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb13c",
  },
  {
    og_url: "",
    urlPath: "pgs-in-electronic_city_phase_2-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb141",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ea",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ef",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f9",
  },
  {
    og_url: "",
    urlPath: "pgs-in-bellandur-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0fe",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0a5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mylasandra-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0aa",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0af",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b9",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb13f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0be",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0cd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0dc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0eb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari%2520nagar-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0fa",
  },
  {
    og_url: "",
    urlPath: "pgs-in-agara-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb140",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb262",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb260",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb261",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb266",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb265",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb264",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb267",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb269",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb26a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb26c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb26b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb270",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb271",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb26e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb26f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb275",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb274",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb273",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb276",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb278",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb277",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb27a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb279",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb27b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-JP-Nagar-in-sector_26-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb27e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb27d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-kota",
    metaInfo_id: "5eb6b5b8d45c502925ddb27f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-kota",
    metaInfo_id: "5eb6b5b8d45c502925ddb280",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-kota",
    metaInfo_id: "5eb6b5b8d45c502925ddb282",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-kota",
    metaInfo_id: "5eb6b5b8d45c502925ddb283",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb285",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb284",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb287",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb289",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb288",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb294",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb293",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb291",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb292",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-hyderabad",
    metaInfo_id: "5eb6b5b9d45c502925ddb296",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb298",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb299",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-hyderabad",
    metaInfo_id: "5eb6b5b9d45c502925ddb297",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hinjewadi-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb29d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-mumbai",
    metaInfo_id: "5eb6b5b9d45c502925ddb29b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb29e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-mumbai",
    metaInfo_id: "5eb6b5b9d45c502925ddb29c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-gurugram",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-coimbatore",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-bangalore",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-bangalore",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarkere-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2ad",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2ab",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karle-town-centre-in-pune",
    metaInfo_id: "5eb6b5b9d45c502925ddb2aa",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-gurugram",
    metaInfo_id: "5eb6b5b9d45c502925ddb2ac",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tawarakere-in-hyderabad",
    metaInfo_id: "5eb6b5b9d45c502925ddb2af",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari%2520nagar-in-gurugram",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar-road-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-1-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b6",
  },
  {
    og_url: "",
    urlPath: "pgs-in-kharadi-gurugram",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b9",
  },
  {
    og_url: "",
    urlPath: "pgs-in-marathahalli-mumbai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2ba",
  },
  {
    og_url: "",
    urlPath: "pgs-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb2bb",
  },
  {
    og_url: "",
    urlPath: "pgs-in-nolambur_mogappair_west-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2fa",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sector_45-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2fc",
  },
  {
    og_url: "",
    urlPath: "pgs-in-bommasandra-bangalore",
    metaInfo_id: "5eb6b5b9d45c502925ddb2fb",
  },
  {
    og_url: "",
    urlPath: "pgs-in-borivali_east-mumbai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2fd",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-delhi-test_qa_property_3-2012",
    metaInfo_id: "5eb6b5bad45c502925ddb34b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad60",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad65",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddad6a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad6f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddad74",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddad79",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddad7e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddad83",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddad88",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddad92",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad97",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddad9c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddada1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddada6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sg-palya-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadab",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddadb0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-karve-nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddadb5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadba",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-vishal-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddadbf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-bangalore",
    metaInfo_id: "5eb6b5b1d45c502925ddadc4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadc9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari%2520nagar-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadce",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi-nagar-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddadd3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddade7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddadec",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddadf1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddadf6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kundalahalli-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddadfb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae00",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae05",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-talawade-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae0a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae0f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae14",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae19",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-taverekare-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae1e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-2-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae23",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr%2520layout-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae28",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-bellandur-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae5f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hoodi-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddae64",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-sarjapur-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae69",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veeranna-palya-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddae6e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruth -nagar-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddae73",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-koramangala-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddae78",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae7d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kadugodi-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddae82",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-harlur-road-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddae87",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hulimavu-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae8c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tavarekere-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddae91",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddae96",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddae9b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-pune-nagar road-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddaea0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-magarpatta-city-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddaea5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddaeaa",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-veerannapalya-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddaeaf",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur%2520road-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb4",
  },
  {
    og_url: "",
    urlPath: "pgs-in-hinjewadi-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddaeb9",
  },
  {
    og_url: "",
    urlPath: "pgs-in-tondiarpret-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddaf95",
  },
  {
    og_url: "",
    urlPath: "hostels-in-warli-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb026",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kattigenahalli-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0a8",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kasavanahalli-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ad",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-panathur-road-in-pune",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b2",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-manyata-in-gurugram",
    metaInfo_id: "5eb6b5b1d45c502925ddb0b7",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0bc",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rr-nagar-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c1",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tanisandra-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0c6",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0cb",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d0",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0d5",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-kharadi-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0da",
  },
  {
    og_url: "",
    urlPath: "pgs-in-hinjewadi-chandigarh",
    metaInfo_id: "5eb6b5b1d45c502925ddb0df",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-fursungi-in-coimbatore",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-wakad-in-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb0e9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-maruthi%2520nagar-in-chennai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0ee",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-tawarakere-in-kota",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-1-in-hyderabad",
    metaInfo_id: "5eb6b5b1d45c502925ddb0f8",
  },
  {
    og_url: "",
    urlPath: "pgs-panathur-road-mumbai",
    metaInfo_id: "5eb6b5b1d45c502925ddb0fd",
  },
  {
    og_url: "",
    urlPath: "pgs-in-sector_17-noida",
    metaInfo_id: "5eb6b5b1d45c502925ddb13e",
  },
  {
    og_url: "",
    urlPath: "pgs-in-test_locality-delhi",
    metaInfo_id: "5eb6b5b2d45c502925ddb18e",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rt-nagar-in-chennai",
    metaInfo_id: "5eb6b5b8d45c502925ddb263",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-munnekolala-in-hyderabad",
    metaInfo_id: "5eb6b5b8d45c502925ddb268",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-nagawara-in-pune",
    metaInfo_id: "5eb6b5b8d45c502925ddb26d",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-btm-layout-in-gurugram",
    metaInfo_id: "5eb6b5b8d45c502925ddb272",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-jp-nagar-in-noida",
    metaInfo_id: "5eb6b5b8d45c502925ddb27c",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-immadahalli-in-kota",
    metaInfo_id: "5eb6b5b8d45c502925ddb281",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-rajarajeshwari-nagar-in-coimbatore",
    metaInfo_id: "5eb6b5b8d45c502925ddb286",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-marathahalli-in-mumbai",
    metaInfo_id: "5eb6b5b8d45c502925ddb28b",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr-layout-in-chandigarh",
    metaInfo_id: "5eb6b5b8d45c502925ddb290",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-yeshwantpur-in-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb295",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-mahalunge-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb29a",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-viman-nagar-in-kota",
    metaInfo_id: "5eb6b5b9d45c502925ddb29f",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-baner-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a4",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-dadabari-in-noida",
    metaInfo_id: "5eb6b5b9d45c502925ddb2a9",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-taverekare-in-hyderabad",
    metaInfo_id: "5eb6b5b9d45c502925ddb2ae",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-electronic-city-2-in-chennai",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b3",
  },
  {
    og_url: "",
    urlPath: "pg-hostel-near-hsr%2520layout-in-hyderabad",
    metaInfo_id: "5eb6b5b9d45c502925ddb2b8",
  },
  {
    og_url: "",
    urlPath: "pgs-in-agara-chandigarh",
    metaInfo_id: "5eb6b5b9d45c502925ddb2f9",
  },
  {
    og_url: "",
    urlPath: "pgs-in-nolambur_mogappair_west-pune",
    metaInfo_id: "5eb6b5b9d45c502925ddb2fe",
  },
];

// this is a sample json array to test one command
const jsonArr2 = [
  {
    og_url: "",
    urlPath: "hostels-in-cv_ramanagar-bangalore",
    metaInfo_id: "65607ba300852a26eb6ba433",
  },
];


const createMongoCommand = (jsonArr) => {
  let command = ``;
  const writeStream = fs.createWriteStream("./results2/finalMongoCommandsProd.txt");
  jsonArr.map((jsonObj) => {
    command = `db.getCollection('metainfos').update(
          { "_id": ObjectId("${jsonObj.metaInfo_id}") }, 
          [
              {
                  "$set": {
                      "og_url": {
                          "$cond": {
                              "if": { "$eq": ["$_id", ObjectId("${jsonObj.metaInfo_id}")] },
                              "then": { "$concat": ["/", "${jsonObj.urlPath}"] }, 
                              "else": "$og_url" 
                          }
                      }
                  }
              }
          ]
      )`;
    // append all these commands in a separate file line by line
    writeStream.write(command + "\n");
  });
  writeStream.end();
};

createMongoCommand(jsonArr2);

