# Web Development Project 4 - *🐶 Dog Discovery App*
Submitted by: **Pappu Jha**

This web app: **allows users to discover random dog breeds by fetching data from The Dog API. Each result includes the breed name, origin, temperament, and an image. Users can add breeds to a ban list to prevent them from showing again.**

Time spent: **12** hours spent in total

## ✅ Required Features
The following **required** functionality is completed:

- [ ] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)

- [ ] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call

- [ ] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
  
- [ ] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 

- [ ] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [ ] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_

The following **optional** features are implemented:

- Multiple types of attributes are clickable and bannable (currently only breed name is supported)

➕ Additional Features
💡 Clean and modern UI with custom CSS styling
🌄 Background image with centered, visually distinct main content and sidebar
🔁 Duplicate-fetch prevention using the ban list logic
🎨 Responsive layout using Flexbox
🎬 Loading feedback in the console (extendable to UI)

🎥 Video Walkthrough
Here's a walkthrough of implemented user stories:
https://www.loom.com/share/f2c04123bd654d699cb25110c98923fb?sid=0afc4e04-a22b-4fff-82c3-064d0c2244a4

🧠 Notes
One challenge was filtering results in real-time while maintaining performance — especially to prevent infinite loops when the ban list grows large.

📄 License
Copyright 2025 Pappu Jha

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
