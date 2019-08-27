import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { notes: state.notes }
}

const connectedList = ({ notes }) => (
    <ul className="list-group list-group-flush">
        { notes.map((note) => {
            return (
                <li className="list-group-item" key={ note.id }>
                    { note.title }
                </li>
            )
        }) }
    </ul>
)

const List = connect(mapStateToProps)(connectedList)

export default List