import React, { Component } from "react";

import "firebase/firestore";
import { FirestoreCollection } from "react-firestore";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore
} from "reactfire";

function Events() {
  const eventsRef = useFirestore()
    .collection("events")
    .doc("gh6QVCWEl1DxatkGX8AG");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(eventsRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.name ? "good" : "bad"}!</p>;
}

{
  /*
export default function Displayevents() {
  return (
    <>
      <div className="pr-12">
        <h1 className="text-white font-semibold text-5xl">Hello</h1>
        <div className="mt-4 text-lg text-blueGray-200">
          <p>{Events.name} A</p>
          <p>{Events.description} product</p>
        </div>
      </div>
    </>
  );
}
*/
}
