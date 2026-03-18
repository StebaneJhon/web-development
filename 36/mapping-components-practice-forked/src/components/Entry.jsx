import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.term}</span>
      </dt>
      <dd>{props.definition}</dd>
    </div>
  );
}

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      term={entry.name}
      definition={entry.meaning}
    />
  );
}

export default createEntry;
