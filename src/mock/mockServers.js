import floors from "./floors.json"
import recommends from "./recommends.json"
import Mock from "mockjs"
Mock.mock("/mock/recommends",{code:200,data:recommends})
Mock.mock("/mock/floors",{code:200,data:floors})