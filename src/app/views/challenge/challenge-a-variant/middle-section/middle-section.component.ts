import {Component, Input} from '@angular/core';
import {VoiceService} from "@core";
import {faCheck, faCircle} from '@fortawesome/free-solid-svg-icons';
import {Word} from "@model";

@Component({
  selector: 'app-v-a-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss']
})
export class ChallengeAVariantMiddleSectionComponent {

  constructor(private _voiceService: VoiceService) {
  }

  faCheck = faCheck;
  faCircle = faCircle;

  @Input() word!: Word;
  @Input() showAnswer = false;
  @Input() lastAnswerCorrect = false;

  speak(word: string) {
    this._voiceService.speak(word);
  }
}
