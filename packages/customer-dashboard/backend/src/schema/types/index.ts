import { SchemaComposer, schemaComposer } from "graphql-compose";
import Campaigns from "./campaigns";

export default (schemaComposer: SchemaComposer) => {

    return {
        ...Campaigns(schemaComposer)
    }
}