import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: "What is React?",
    content: "React is a Frontend JavaScript Library"
  },
  {
    title: "Why use React?",
    content: "React is a Favorite JS library aming engineers"
  },
  {
    title: "How do you use React?",
    content: "We use React by creating components."
  },
];

const options = [
  {
    label: "The color Red",
    value: "red"
  },
  {
    label: "The color Green",
    value: "green"
  },
  {
    label: "The shade of Blue",
    value: "blue"
  },
]


const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
      {/* <Dropdown
        label={Select a Color}
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> 
        <Translate />*/}

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;