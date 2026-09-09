import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from "../../interfaces/note";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(
    private noteService: NoteService,
  ) {}

  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe((notes: Note[])=> {
      this.notes = notes;
    })
  }

  editNote(note: Note): void {
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
  }

  deleteNote(id: number) : void {
    this.noteService.deleteNote(id);
  }

}
