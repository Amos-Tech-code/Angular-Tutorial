import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NoteService} from "../../services/note.service";
import {Note} from "../../interfaces/note";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnChanges {

  noteForm!: FormGroup;
  @Input() selectedNote!: Note;
  isEdit!: boolean;

  constructor(
    private noteService: NoteService,
    private formBuilder: FormBuilder
  ) {
    this.noteService.getEditable().subscribe({
      next: (response) => (this.isEdit = response),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
        if (changes['selectedNote']?.currentValue) {
          const value = changes['selectedNote'].currentValue;
          this.noteForm.patchValue({
            id: value.id,
            title: value.title,
            content: value.content,
          });
        }
    }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      id: new Date().getTime(),
      title: ['', Validators.required],
      content: [''],
    });
  }

  onSubmit() {

    if (this.noteForm.invalid) {
      return;
    }

    const note: Note = this.noteForm.value;

    if(this.isEdit) {
      this.noteService.updateNote(note);
      this.noteService.setEditable(false);
    } else {
      this.noteService.createNote(note);
    }

    console.log(note);
    // Save it on notes array of service
    this.noteForm.reset();
  }

}
