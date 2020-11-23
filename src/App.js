import './App.scss';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import TimePicker from './components/TimePicker';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      values: {}
    }
  }

  
  isOpen = () => {
    this.setState((state) => ({open : !state.open}));
  }

  render() {

            return (
              
              <div >
                
                <Button onClick={this.isOpen}>Open modal</Button>
                {this.state.open && (
                <TimePicker 
                      title="Checkout Form"
                      show={this.state.open}
                      columns={[
                        {
                          name: 'day',
                          label: 'Choose a day:',
                          options: [
                            { texte: 'Monday', value:'monday' },
                            { texte: 'Tuesday', value:'tuesday' },
                            { texte: 'Wednesday', value:'wednesday' },
                            { texte: 'Thursday', value:'thursday' },
                            { texte: 'Friday', value:'friday' },
                            { texte: 'Saturday', value:'saturday' }
                          ]
                        },
                        {
                          name: 'time',
                          label: 'Choose a time:',
                          options: [
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:00' },
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:01' },
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:02' },
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:03' },
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:04' },
                            { texte: '**13:00** PM - **19:00** PM', value:'13:00-19:05' }
                          ]
                        }
                              
                    ]}
                      onDismiss={() => this.setState((state) => ({open : !state.open}))}
                      onConfirm={
                        (values) => {
                                      console.log(values);
                                      this.setState((state) => ({open : !state.open}));
                                    }  
                      }
                />
                
                )}
                
              </div>
              
            );
  }
}

export default App;
