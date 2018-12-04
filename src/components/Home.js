import React from 'react';
import TopBar from './TopBar';
import HashtagPicker from './HashtagPicker';
import Posts from './Posts';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      generation: undefined,
    };
  }

  render() {
    const { campuses, generation } = this.state;
    const { user } = this.props;

    const handleCampusChange = (e) => {
      if (e.target.checked) {
        return this.setState({
          campuses: [...this.state.campuses, e.target.value],
        });
      }
      return this.setState({
        campuses: this.state.campuses.filter(campus => campus !== e.target.value),
      });
    };

    const handleGenerationChange = (e) => {
      this.setState({ generation: e.target.value });
    };

    return (
      <div>
        <TopBar user={user}/>
        <div className="container">
          <HashtagPicker
            campuses={campuses}
            generation={generation}
            handleCampusChange={handleCampusChange}
            handleGenerationChange={handleGenerationChange}
          />
          <Posts campuses={campuses} generation={generation} />
        </div>
      </div>
    );
  }
}


export default Home;
