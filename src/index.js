import path from 'path';
import Modules from 'async-steps/dist/controllers/Modules';

const modules = Modules.getModulesFromFolder(path.join(__dirname, 'modules'));

export default modules;