import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["verse"]

    connect() {
      this.chapterVerses = JSON.parse(this.element.dataset.filterChapterVerses);  
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
