import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["verse"]

    connect() {
      this.chapterVerses = {
        1: 7,    // Al-Fatiha
        2: 286,  // Al-Baqara
        3: 200,  // Al-Imran
        4: 176,  // An-Nisa
        5: 120,  // Al-Ma'idah
        6: 165,  // Al-An'am
        7: 206,  // Al-A'raf
        8: 75,   // Al-Anfal
        9: 129,  // At-Tawbah
        10: 109, // Yunus
        11: 123, // Hud
        12: 111, // Yusuf
        13: 43,  // Ar-Ra'd
        14: 52,  // Ibrahim
        15: 99,  // Al-Hijr
        16: 128, // An-Nahl
        17: 111, // Al-Isra
        18: 110, // Al-Kahf
        19: 98,  // Maryam
        20: 135, // Ta-Ha
        21: 112, // Al-Anbiya
        22: 78,  // Al-Hajj
        23: 118, // Al-Mu'minun
        24: 64,  // An-Nur
        25: 77,  // Al-Furqan
        26: 227, // Ash-Shu'ara
        27: 93,  // An-Naml
        28: 88,  // Al-Qasas
        29: 69,  // Al-Ankabut
        30: 60,  // Ar-Rum
        31: 34,  // Luqman
        32: 30,  // As-Sajda
        33: 73,  // Al-Ahzab
        34: 54,  // Saba
        35: 45,  // Fatir
        36: 83,  // Ya-Sin
        37: 182, // As-Saffat
        38: 88,  // Sad
        39: 75,  // Az-Zumar
        40: 85,  // Ghafir
        41: 54,  // Fussilat
        42: 53,  // Ash-Shura
        43: 89,  // Az-Zukhruf
        44: 59,  // Ad-Dukhan
        45: 37,  // Al-Jathiya
        46: 35,  // Al-Ahqaf
        47: 38,  // Muhammad
        48: 29,  // Al-Fath
        49: 18,  // Al-Hujurat
        50: 45,  // Qaf
        51: 60,  // Adh-Dhariyat
        52: 49,  // At-Tur
        53: 62,  // An-Najm
        54: 55,  // Al-Qamar
        55: 78,  // Ar-Rahman
        56: 96,  // Al-Waqi'a
        57: 29,  // Al-Hadid
        58: 22,  // Al-Mujadila
        59: 24,  // Al-Hashr
        60: 13,  // Al-Mumtahana
        61: 14,  // As-Saff
        62: 11,  // Al-Jumua
        63: 11,  // Al-Munafiqun
        64: 18,  // At-Taghabun
        65: 12,  // At-Talaq
        66: 12,  // At-Tahrim
        67: 30,  // Al-Mulk
        68: 52,  // Al-Qalam
        69: 52,  // Al-Haaqqa
        70: 44,  // Al-Maarij
        71: 28,  // Nuh
        72: 28,  // Al-Jinn
        73: 20,  // Al-Muzzammil
        74: 56,  // Al-Muddaththir
        75: 40,  // Al-Qiyama
        76: 31,  // Al-Insan
        77: 50,  // Al-Mursalat
        78: 40,  // An-Naba
        79: 46,  // An-Nazi'at
        80: 42,  // Abasa
        81: 29,  // At-Takwir
        82: 19,  // Al-Infitar
        83: 36,  // Al-Mutaffifin
        84: 25,  // Al-Inshiqaq
        85: 22,  // Al-Burooj
        86: 19,  // At-Takweer
        87: 19,  // Al-A'la
        88: 26,  // Al-Ghashiya
        89: 30,  // Al-Fajr
        90: 20,  // Al-Balad
        91: 15,  // Ash-Shams
        92: 21,  // Al-Lail
        93: 11,  // Ad-Duha
        94: 8,   // Al-Inshirah
        95: 8,   // At-Tin
        96: 19,  // Al-Alaq
        97: 5,   // Al-Qadr
        98: 8,   // Al-Bayyina
        99: 8,   // Az-Zalzalah
        100: 11, // Al-Adiyat
        101: 11, // Al-Qari'a
        102: 8,  // At-Takathur
        103: 3,  // Al-Asr
        104: 9,  // Al-Humaza
        105: 5,  // Al-Fil
        106: 4,  // Quraish
        107: 7,  // Al-Ma'un
        108: 3,  // Al-Kawthar
        109: 6,  // Al-Kafirun
        110: 3,  // An-Nasr
        111: 5,  // Al-Masad
        112: 5,  // Al-Ikhlas
        113: 5,  // Al-Falaq
        114: 6   // An-Nas
      }    
    };

    updateVerses(event) {
      const chapterNumber = event.target.value;
      const verseSelect = document.getElementById('filter_verse');
      verseSelect.innerHTML = ''; // Clear the previous options
  
      if (chapterNumber && this.chapterVerses[chapterNumber]) {
        const totalVerses = this.chapterVerses[chapterNumber];
        for (let i = 1; i <= totalVerses; i++) {
          const option = document.createElement('option');
          option.value = i;
          option.text = i;
          verseSelect.appendChild(option);
        }
      }
    }
}
