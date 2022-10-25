# React AirfieldHub (react-airfieldhub)

This library is a wrapper for React 16.8+ websites and apps to integrate AirfieldHub seamlessly into your existing system.

AirfieldHub aims to take all the pain out of PPR (Prior Permission Required) for both pilots and airfield, in addition to a myriad of other features for airfields.

This version of the library creates two new tags, allowing you to display your AirfieldHub PPR and Bookout forms on your own website without having to code anything yourself.

Our philosophy at AirfieldHub is that everything should be simple and straight forward, making all our lives easier, hence this simple library ensuring that you can be up and running with AirfieldHub with the least amount of pain possible.


## Installation

### Using NPM
`npm install react-airfieldhub --save`

### Using YARN
`yarn add react-airfieldhub`


## Initial Setup

First: your `App.js` file; Or any other component file, you will then need to import AirfieldHub as follows.

```

import { AirfieldHubBookout, AirfieldHubPPR } from  'react-airfieldhub';


```

Second: your `App.css` file (or relevant css file); You will need to include a minimum width for our wrapper: You do this by copy & pasting the code below:

```
  .airfieldhub_wrapper{
    min-width: 250px;
  }

```



## Usage

Once the AirfieldHub library has been installed following the instructions above, you will then be able to include the forms by going directly in the template of the page you wish for it to appear:


To show the AirfieldHub PPR form:

```
        
  <AirfieldHubPPR airfieldhub_key="key_from_account" />


```

To show the AirfieldHub BOOKOUT form:

```
        
  <AirfieldHubBookout airfieldhub_key="key_from_account" />


```

NOTE: your `airfieldhub_key` comes from your AirfieldHub account, you can find this by clicking `Dashboard` on the top right of our user interface, then `Widget` on the menu on the left hand side of the screen.

We would recommend keeping this key either as a global variable or as an environment variable.

This will span the whole width of the parent item (css class name: airfieldhub_wrapper), and will automatically extend the height of the element to ensure no scrolling is necessary.


## Further help

To get more help on this library, please feel free to contact us directly through AirfieldHub (https://airfieldhub.com/contact) and we will respond as quickly as we can. 

Should you find any particular issues, please feel free to open a new issue! 

We will endeavour to update this library periodically, as and when it is required by our clients, and when new features become available.




---
Copyright (c) 2022, AirfieldHub LTD
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software
   must display the following acknowledgement:
   This product includes software developed by AirfieldHub LTD.
4. Neither the name of the AirfieldHub LTD nor the
   names of its contributors may be used to endorse or promote products
   derived from this software without specific prior written permission.

<font size="1">
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL 
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE 
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</font>

