import isWorldLoaded = World.isWorldLoaded;
import {logger} from "./loging";

export class Baritone{
    constructor() {}
    settingChanger(setting: string, value:any){
        Chat.say('#'+setting+' '+value) //Please make sure that it's used only with either floats or booleans
    }
    goto(x:int,y:int,z:int,relative:boolean) {
        if (relative == true){
            Chat.say('#goto ~' + x + ' ~' + y + ' ~' + z)
        }else{
            Chat.say('#goto ' + x + ' ' + y + ' ' + z)
        }
    }
}

export class waypoint{
    x: number;
    y: number;
    z: number;
    constructor(name) {
        this.x = 0
        this.y = 0
        this.z = 0
    }
    goto(){
        Chat.say('#goto ' + this.x + ' ' + this.y + ' ' + this.z)
    }
    setGoal(){
        Chat.say('#goal ' + this.x + ' ' + this.y + ' ' + this.z)
    }
    elytraTo(){
        if(isWorldLoaded() == true){
            if(World.getDimension()=="minecraft:the_nether"){
                this.setGoal()
                Chat.say('#elytra')
            }else{
                logger('Not in the nether dimension')
            }
        }else{
            logger('World is still loading')
        }
    }
}