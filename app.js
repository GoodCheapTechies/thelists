let socialListings = document.getElementsByClassName('grid-social-link-item');
let theGrid = document.getElementById('the-grids');
let socialGrids = document.getElementsByClassName('social-grid');

for(let socialItem = 0; socialItem < socialListings.length; socialItem++){
    socialListings[socialItem].addEventListener('click', () => {
        socialListings[socialItem].classList.add('active');

        
        //socialGrids[socialItem].style.transform = 'translateX(-' + socialItem*100 +'%)';


        for(let socialItemBefore = 0; socialItemBefore < socialItem; socialItemBefore++){
            socialListings[socialItemBefore].classList.remove('active');
        };


        for(let socialItemAfter = socialItem+1; socialItemAfter < socialListings.length; socialItemAfter++){
            socialListings[socialItemAfter].classList.remove('active');
        }

        if(socialItem == 0){
            socialGrids[0].style.transform = 'translateX(-0%)';
            socialGrids[1].style.transform = 'translateX(-0%)';
            socialGrids[2].style.transform = 'translateX(-0%)';
            socialGrids[3].style.transform = 'translateX(-0%)';
            socialGrids[4].style.transform = 'translateX(-0%)';
        }

        if(socialItem == 1){
            socialGrids[0].style.transform = 'translateX(-100%)';
            socialGrids[1].style.transform = 'translateX(-100%)';
            socialGrids[2].style.transform = 'translateX(-100%)';
            socialGrids[3].style.transform = 'translateX(-100%)';
            socialGrids[4].style.transform = 'translateX(-100%)';
        }

        if(socialItem == 2){
            socialGrids[0].style.transform = 'translateX(-200%)';
            socialGrids[1].style.transform = 'translateX(-200%)';
            socialGrids[2].style.transform = 'translateX(-200%)';
            socialGrids[3].style.transform = 'translateX(-200%)';
            socialGrids[4].style.transform = 'translateX(-200%)';
        }

        if(socialItem == 3){
            socialGrids[0].style.transform = 'translateX(-300%)';
            socialGrids[1].style.transform = 'translateX(-300%)';
            socialGrids[2].style.transform = 'translateX(-300%)';
            socialGrids[3].style.transform = 'translateX(-300%)';
            socialGrids[4].style.transform = 'translateX(-300%)';
        }

        if(socialItem == 4){
            socialGrids[0].style.transform = 'translateX(-400%)';
            socialGrids[1].style.transform = 'translateX(-400%)';
            socialGrids[2].style.transform = 'translateX(-400%)';
            socialGrids[3].style.transform = 'translateX(-400%)';
            socialGrids[4].style.transform = 'translateX(-400%)';
        }

        if(socialItem == 5){
            socialGrids[0].style.transform = 'translateX(-500%)';
            socialGrids[1].style.transform = 'translateX(-500%)';
            socialGrids[2].style.transform = 'translateX(-500%)';
            socialGrids[3].style.transform = 'translateX(-500%)';
            socialGrids[4].style.transform = 'translateX(-500%)';
        }
    });
    
}