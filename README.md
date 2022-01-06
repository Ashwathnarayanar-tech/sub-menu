# sub-menu
This app can used as block wherever we need a accordion for displaying sub-menus.

![image](https://user-images.githubusercontent.com/86000416/148357797-a2e7e6d7-9cce-4db7-864d-3c682655c1c1.png)

# Steps to use this block inside store theme:
step1
Add "echidna.sub-menu":"0.x" in your store theme dependancies.

step2
Add "sub-menu-account" block, in page where you want to display two column layout.

step3
Declare the block with props as shown below:
"sub-menu-account":{
    "props":{
      "menus":[{
        "name":"My Account",
        "link":"/account",
        "img":"https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/561DC964-C331-436E-A1E8-D45C286AB76D.svg"
      },{
        "name":"Checkout",
        "link":"/checkout"
      },
      {
        "name":"MODELS",
        "children":[
          {
            "name":"Altima",
            "link":"/checkout"
          },
          {
            "name":"Leaf",
            "link":"/checkout"
          },
          {
            "name":"Maxima",
            "link":"/checkout"
          },
          {
            "name":"Rogue",
            "link":"/checkout"
          },
          {
            "name":"Sentra",
            "link":"/checkout"
          }

        ]
      },
      {
        "name":"Register",
        "link":"/login"
      },
      {
        "name":"POPULAR",
        "children":[
          {
            "name":"Altima",
            "link":"/checkout"
          },
          {
            "name":"Leaf",
            "link":"/checkout"
          },
          {
            "name":"Maxima",
            "link":"/checkout"
          },
          {
            "name":"Rogue",
            "link":"/checkout"
          },
          {
            "name":"Sentra",
            "link":"/checkout"
          }

        ]
      },

      {
        "name":"Login",
        "link":"/login"
      }
    ]
    }
  }
  
  ## Note: 
  Here you can addList of items as props and it can be mapped in the component created.
  
  # output:
  ![image](https://user-images.githubusercontent.com/86000416/148359380-1e05640b-f9f1-4059-8190-f5e9ca66c710.png)
 
 # css classes:
 .myButton
 .menu
 .item
 .item:hover
 .open
 .a

