import {test as baseTest} from '@playwright/test'

import { Loginpage } from '../pages/Loginpage'
import { Cartpage } from '../pages/Cartpage';
import { Homepage } from '../pages/Homepage';


type myPomFixture = {

loginpage : Loginpage;
homepage : Homepage;
cartpage : Cartpage
}

export const test = baseTest.extend<myPomFixture>({

    loginpage : async({page},use)=>{
    
        const loginpage = new Loginpage(page);

        await use(loginpage)
    },
    

        homepage : async({page},use)=>{
        
            const homepage = new Homepage(page);
    
            await use(homepage)
        },

        cartpage : async({page},use)=>{
        
          //  const cartpage = new Cartpage(page);
    
            await use(new Cartpage(page));
        }

})