Skip to content
DEV Community
Search...

Log in
Create account

17
Jump to Comments
9
Save

Cover image for How to add Ckeditor5 in your Next JS, react App
Apu Chakraborty
Apu Chakraborty
Posted on Jun 6, 2021 • Updated on Mar 11, 2022


5

2

1
How to add Ckeditor5 in your Next JS, react App
#
webdev
#
ckeditor5
#
nextjs
#
react
I am creating a fresh CRA & here is my project directory

Alt Text

Before we going started, you need to add this npm package first, to install please paste the below code into your terminal.
npm i @ckeditor/ckeditor5-react
npm i @ckeditor/ckeditor5-build-classic
create a components folder under src folder and create a Editor component under components/Editor.js & use this code
import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
    };
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default Editor;



Now go to your app.js or wherever you want to use this editor just import Editor Component and use this
import React, { useState, useEffect } from "react";
import "./styles.css";
import Editor from "./Editor";

export default function App() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>ckEditor 5</h1>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />

      {JSON.stringify(data)}
    </div>
  );
}


visit ckEditor5 documentation to add more features - https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html

you can clone repo
GitHub logo apuchakraborty / ckEditor5-implement
Created with CodeSandbox
ckEditor5-implement
Created with CodeSandbox

go to - cd /projectdir

npm install & npm start to run

View on GitHub
You can use this code in codesSandbox
Here is your editor -



Top comments (17)

Subscribe
pic
Add to the discussion
 
 
laurencefass profile image
laurence fass
•
Feb 18 '22

Your codesandbox has same problem as my application. When you make a change in the code, and reload error:

CKEditorError
ckeditor-duplicated-modules
Read more: ckeditor.com/docs/ckeditor5/latest...
▶ 13 stack frames were collapsed.
eval
/src/Editor.js:10:21
7 | useEffect(() => {
8 | editorRef.current = {
9 | CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+

10 | ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
| ^
11 | };
12 | }, []);
13 |

Any idea how to solve this?


2
 likes
Like
Reply
 
 
devzversity profile image
Apu Chakraborty 
•
Mar 3 '22

codesandbox.io/s/bitter-morning-m2...


Like
Reply
 
 
laurencefass profile image
laurence fass
•
Mar 3 '22

thanks for reply. can you provide explanation with link?


Like
Reply
 
 
codexmakercompany profile image
Samuel Vazquez
•
Oct 20 '21

Thanks for this !


3
 likes
Like
Reply
 
 
terkwood profile image
Felix Terkhorn
•
Oct 23 '21

Quite welcome! Best of luck in your journeys and have a great weekend!


1
 like
Like
Reply
 
 
commentme profile image
Unnati Bamania
•
Sep 15 '21

Thanks! This really helps.


2
 likes
Like
Reply
 
 
narottam81 profile image
Narottam81
•
Dec 21 '21

how can we add "Normal" in heading of toolbar along with paragraph? Can you make a post on that, it will help alot.


2
 likes
Like
Reply
 
 
trinhcamminh profile image
MINHCT
•
Nov 20 '22

sir how can I upload image


1
 like
Like
Reply
 
 
rahulnikam profile image
Rahul Nikam
•
Jan 1 '23

Did you find any solution?


1
 like
Like
Reply
 
 
trinhcamminh profile image
MINHCT
•
Jan 1

not yet sir:(((


2
 likes
Like
Thread
 
rahulnikam profile image
Rahul Nikam
•
Jan 1

Bro, I'm trying to find a Rich Text Editor for one of my projects, Non of them are working as expected, but you can go with TipTap


1
 like
Like
Thread
 
trinhcamminh profile image
MINHCT
•
Jan 1

can I upload image with this bro ?


2
 likes
Like
Thread
 
rahulnikam profile image
Rahul Nikam
•
Jan 2

Yes, but only from the URL and not from your device! :(


Like
Thread
 
trinhcamminh profile image
MINHCT
•
Jan 3 • Edited on Jan 3

finally I did it bro. try to use ckeditor by using online builder method. When you choose your plugins remember to choose base64 adapter this can help you to upload image from your computer. I have tried and success. Good luck to you bro. Note that base64 is the way you can upload image without any server-side configuration and no additional pluggin need to be installed when you use online-builder


2
 likes
Like
Thread
 
rahulnikam profile image
Rahul Nikam
•
Jan 4

Are you using this with Reactjs or Nextjs or any other tech? if you are using it with react or next can you plz send me a GitHub link for some reference?


2
 likes
Like
Thread
 
trinhcamminh profile image
MINHCT
•
Jan 4

Yes of course bro you can access my blog here for more detail. Also I'm using it with ReactJS. If you have any problem just comment in my blog and I will help you and like if this post is useful <3
dev.to/trinhcamminh/using-ckeditor...


1
 like
Like
Reply
 
 
felixasante profile image
felix asante
•
Feb 8

Really helpful, i finally got to fix the errors that i was having


1
 like
Like
Reply
View full discussion (17 comments)
Code of Conduct • Report abuse
DEV Community

Trending in NextJS
The NextJS community is currently discussing the use of React Context in Next.js 13, the migration from Next.js to Astro, and building applications with react-pdf.

chaoocharles 
Next13 Fullstack Ecommerce 🛒 | React, Typescript, TailwindCSS, Prisma and MongoDB 🔥
Chaoo Charles ・ Jul 29
#nextjs #react #tailwindcss #javascript
perssondennis 
Do Contexts in Next.js 13 Make the Whole App Render on the Client?
Dennis Persson ・ Jul 30
#nextjs #react #webdev #javascript
mfts 
Building a Document Viewer with react-pdf
Marc Seitz ・ Jul 26
#nextjs #pdf #tutorial #webdev
This is Learning 
Porting a Next.js Site to Astro Step-by-Step
Corbin Crutchley for This is Learning ・ Jul 27
#webdev #astro #react #nextjs
vulcanwm 
Melody Maker
Medea ・ Jul 24
#webdev #nextjs #react #music
Read next
elyasshamal profile image
Generating Unique IDs with crypto.randomUUID() in React:
ElyasShamal - Jul 1

rodionchachura profile image
How To Generate Icons for a Progressive Web App from SVG File With a Single Command
Rodion Chachura - Jul 30

mohammadfaisal profile image
How To Improve Rendering Performance in a 1,000-Item React List
Mohammad Faisal - Jul 30

mbogan profile image
zkEVMs and the Future of Blockchain Scalability - Linea Goes to Mainnet
Michael Bogan - Jul 19


Apu Chakraborty
Follow
I am a tech enthusiast, I am specialized in javascript and also work with PHP and Python.
LOCATION
India
WORK
Full Stack Developer at Self-Employed
JOINED
Apr 7, 2020
More from Apu Chakraborty
Laravel 7 API authentication for beginners
#laravel #beginners #tutorial #webdev
DEV Community

Trending in NextJS
The NextJS community is currently discussing the creation of multilingual apps using the new app directory and i18n, as well as understanding the intricacies of NextJS Docker Images.

codegino 
Build a multilingual NextJS app using the new app directory
Carlo Gino Catapang ・ Aug 9
#nextjs #javascript #react #webdev
code42cate 
Understanding Next.JS Docker Images
Jonas Scholz ・ Aug 7
#docker #nextjs #react #devops
DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Advertise on DEV
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2023.