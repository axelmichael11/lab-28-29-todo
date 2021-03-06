
import React from 'react'
import NoteForm from '../note-form'
import NoteItem from '../note-item'


class NoteList extends React.Component {
  render(){
    {console.log('this.props',this.props)}
    return(
      <div className='note-list'>
        <ul>
        {this.props.notes.map((item,i)=>
          <NoteItem
          key={i}
          note={item}
          noteRemove={this.props.handleNoteRemove}
          noteUpdate={this.props.handleNoteUpdate}
          />
        )}
        </ul>
      </div>
    )
  }
}

export default NoteList
