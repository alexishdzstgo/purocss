const dockContainer = document.querySelector(".dock");
const dockItems = dockContainer.querySelectorAll(".dock-item");

const defaultItemScale = 1;
const hoverItemScale = 2.5;
const neighborItemScale = 2;

const defaultMargin = "10px";
const expandedMargin = "40px"

const updateDockItems = () => {
    dockItems.forEach((item,index) => {
        let scale = defaultItemScale;
        let margin = defaultMargin;

        if(item.isHovered){
            scale = hoverItemScale;
            margin = expandedMargin;
        } else if(item.isNeighbor){
            scale = neighborItemScale
            margin = expandedMargin;
        }
    });
};