import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import AddNoteForm from "./Components/AddNode";
import AllNotes from "./Components/allNotes";
import UpdateNoteModal from "./Components/UpdateNoteModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: null,
      showModal: false,
      toggle: false,
      rnd: true,
      index_of_the_note: null
    };
  }

  note_changed = () => {
    this.setState({ rnd: true });
  };
  noteSelected = (note, index) => {
    this.setState({
      index_of_the_note: index
    });
    this.setState({
      showModal: true
    });
    this.setState({
      selectedNote: note
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
    this.setState({
      selectedNote: null
    });
  };

  toggle_change = () => {
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <div class="pos-f-t">
            <nav class="navbar navbar-dark bg-dark">
              <button
                onClick={this.toggle_change}
                class="navbar-toggler"
                type="button"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="p-1 rounded  shadow-sm mb-2 mt-2 mr-5 ml-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      id="button-addon2"
                      type="submit"
                      class="bg-secondary btn btn-link text-warning"
                    >
                      <i
                        class="glyphicon glyphicon-search"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <input
                    type="search"
                    placeholder="What're you searching for?"
                    aria-describedby="button-addon2"
                    class="text-white
   bg-light form-control border-0"
                  ></input>
                </div>
              </div>
              <span class="navbar-text"></span>
            </nav>
            {this.state.toggle ? (
              <nav class="toggle-navbar">
                <div class="bg-dark p-4">
                  <h4 class="text-white">Collapsed content</h4>
                  <span class="text-muted">
                    Toggleable via the navbar brand.
                  </span>
                </div>
              </nav>
            ) : (
              <div></div>
            )}
          </div>
        </header>
        <div className="app">
          <AddNoteForm
            store_notes={this.props.store_notes}
            note_changed={this.note_changed}
          />
          <AllNotes
            store_notes={this.props.store_notes}
            selected={this.noteSelected}
          />
          {this.state.showModal && (
            <UpdateNoteModal
              index={this.state.index_of_the_note}
              store_notes={this.props.store_notes}
              modal={this.closeModal}
              note={this.state.selectedNote}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
