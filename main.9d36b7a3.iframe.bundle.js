(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return useTable}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43),styles=Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.a)({padding:8,borderRadius:"3px",borderBottom:"2px solid #DFE1E6"}),TableContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({isSelectable:!1}),useTable=function useTable(){return Object(react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TableContext)},Table=function Table(_ref){var children=_ref.children,isSelectable=_ref.isSelectable;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)(TableContext.Provider,{value:{isSelectable:isSelectable},children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.a)("table",{css:styles,children:children})})};Table.displayName="Table",__webpack_exports__.a=Table;try{table.displayName="table",table.__docgenInfo={description:"",displayName:"table",props:{isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/table.tsx#table"]={docgenInfo:table.__docgenInfo,name:"table",path:"src/table.tsx#table"})}catch(__react_docgen_typescript_loader_error){}},170:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return THead}));__webpack_require__(22),__webpack_require__(446),__webpack_require__(5),__webpack_require__(11);var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(104),_atlaskit_checkbox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(883),_table__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(143),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(43),_excluded=["children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var headCellStyles=Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.a)({color:"#5e6c84"}),HeadCell=function HeadCell(props){return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.a)("th",Object.assign({css:headCellStyles},props))};HeadCell.displayName="HeadCell";var THead=function THead(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),table=Object(_table__WEBPACK_IMPORTED_MODULE_6__.b)();return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.a)("thead",Object.assign({},props,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.b)("tr",{children:[table.isSelectable&&Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.a)(HeadCell,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.a)(_atlaskit_checkbox__WEBPACK_IMPORTED_MODULE_5__.a,{})}),children]})}))};THead.displayName="THead",__webpack_exports__.b=HeadCell;try{THead.displayName="THead",THead.__docgenInfo={description:"",displayName:"THead",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/head-cell.tsx#THead"]={docgenInfo:THead.__docgenInfo,name:"THead",path:"src/head-cell.tsx#THead"})}catch(__react_docgen_typescript_loader_error){}try{headcell.displayName="headcell",headcell.__docgenInfo={description:"",displayName:"headcell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/head-cell.tsx#headcell"]={docgenInfo:headcell.__docgenInfo,name:"headcell",path:"src/head-cell.tsx#headcell"})}catch(__react_docgen_typescript_loader_error){}},229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return presidents}));var presidents=[{id:1,nm:"George Washington",pp:"None, Federalist",tm:"1789-1797"},{id:2,nm:"John Adams",pp:"Federalist",tm:"1797-1801"},{id:3,nm:"Thomas Jefferson",pp:"Democratic-Republican",tm:"1801-1809"},{id:4,nm:"James Madison",pp:"Democratic-Republican",tm:"1809-1817"},{id:5,nm:"James Monroe",pp:"Democratic-Republican",tm:"1817-1825"},{id:6,nm:"John Quincy Adams",pp:"Democratic-Republican",tm:"1825-1829"},{id:7,nm:"Andrew Jackson",pp:"Democrat",tm:"1829-1837"},{id:8,nm:"Martin van Buren",pp:"Democrat",tm:"1837-1841"},{id:9,nm:"William H. Harrison",pp:"Whig",tm:"1841"},{id:10,nm:"John Tyler",pp:"Whig",tm:"1841-1845"},{id:11,nm:"James K. Polk",pp:"Democrat",tm:"1845-1849"},{id:12,nm:"Zachary Taylor",pp:"Whig",tm:"1849-1850"},{id:13,nm:"Millard Fillmore",pp:"Whig",tm:"1850-1853"},{id:14,nm:"Franklin Pierce",pp:"Democrat",tm:"1853-1857"},{id:15,nm:"James Buchanan",pp:"Democrat",tm:"1857-1861"},{id:16,nm:"Abraham Lincoln",pp:"Republican",tm:"1861-1865"},{id:17,nm:"Andrew Johnson",pp:"National Union",tm:"1865-1869"},{id:18,nm:"Ulysses S. Grant",pp:"Republican",tm:"1869-1877"},{id:19,nm:"Rutherford Hayes",pp:"Republican",tm:"1877-1881"},{id:20,nm:"James Garfield",pp:"Republican",tm:"1881"},{id:21,nm:"Chester Arthur",pp:"Republican",tm:"1881-1885"},{id:22,nm:"Grover Cleveland",pp:"Democrat",tm:"1885-1889"},{id:23,nm:"Benjamin Harrison",pp:"Republican",tm:"1889-1893"},{id:24,nm:"Grover Cleveland",pp:"Democrat",tm:"1893-1897"},{id:25,nm:"William McKinley",pp:"Republican",tm:"1897-1901"},{id:26,nm:"Theodore Roosevelt",pp:"Republican",tm:"1901-1909"},{id:27,nm:"William Taft",pp:"Republican",tm:"1909-1913"},{id:28,nm:"Woodrow Wilson",pp:"Democrat",tm:"1913-1921"},{id:29,nm:"Warren Harding",pp:"Republican",tm:"1921-1923"},{id:30,nm:"Calvin Coolidge",pp:"Republican",tm:"1923-1929"},{id:31,nm:"Herbert C. Hoover",pp:"Republican",tm:"1929-1933"},{id:32,nm:"Franklin Delano Roosevelt",pp:"Democrat",tm:"1933-1945"},{id:33,nm:"Harry S Truman",pp:"Democrat",tm:"1945-1953"},{id:34,nm:"Dwight David Eisenhower",pp:"Republican",tm:"1953-1961"},{id:35,nm:"John Fitzgerald Kennedy",pp:"Democrat",tm:"1961-1963"},{id:36,nm:"Lyndon Baines Johnson",pp:"Democrat",tm:"1963-1969"},{id:37,nm:"Richard Milhous Nixon",pp:"Republican",tm:"1969-1974"},{id:38,nm:"Gerald R. Ford",pp:"Republican",tm:"1974-1977"},{id:39,nm:"Jimmy Carter",pp:"Democrat",tm:"1977-1981"},{id:40,nm:"Ronald Wilson Reagan",pp:"Republican",tm:"1981-1989"},{id:41,nm:"George H. W. Bush",pp:"Republican",tm:"1989-1993"},{id:42,nm:"Bill Clinton",pp:"Democrat",tm:"1993-2001"},{id:43,nm:"George W. Bush",pp:"Republican",tm:"2001-2009"},{id:44,nm:"Barack Obama",pp:"Democrat",tm:"2009-2016"}]},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return src_table.a})),__webpack_require__.d(__webpack_exports__,"d",(function(){return body})),__webpack_require__.d(__webpack_exports__,"c",(function(){return src_row})),__webpack_require__.d(__webpack_exports__,"a",(function(){return src_cell})),__webpack_require__.d(__webpack_exports__,"b",(function(){return head_cell.b})),__webpack_require__.d(__webpack_exports__,"e",(function(){return head_cell.a}));var src_table=__webpack_require__(143),react=(__webpack_require__(25),__webpack_require__(0)),emotion_react_jsx_runtime_browser_esm=__webpack_require__(43),RowContext=Object(react.createContext)({});function Body(_ref){var rows=_ref.rows,children=_ref.children;return"function"==typeof children?Object(emotion_react_jsx_runtime_browser_esm.a)(RowContext.Provider,{value:rows,children:Object(emotion_react_jsx_runtime_browser_esm.a)("tbody",{children:rows.map(children)})}):Object(emotion_react_jsx_runtime_browser_esm.a)("tbody",{children:children})}var body=Body;try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"ObjectType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/body.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"src/body.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(22),__webpack_require__(446),__webpack_require__(5),__webpack_require__(863),__webpack_require__(8),__webpack_require__(7),__webpack_require__(17),__webpack_require__(13),__webpack_require__(12),__webpack_require__(16),__webpack_require__(15),__webpack_require__(6),__webpack_require__(27),__webpack_require__(11);var emotion_react_browser_esm=__webpack_require__(104),colors=__webpack_require__(20),esm_checkbox=__webpack_require__(883),padding=Object(emotion_react_browser_esm.a)({padding:"4px 8px"}),cell_Cell=function Cell(props){return Object(emotion_react_jsx_runtime_browser_esm.a)("td",Object.assign({css:padding},props))};cell_Cell.displayName="Cell";var src_cell=cell_Cell;try{cell.displayName="cell",cell.__docgenInfo={description:"",displayName:"cell",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/cell.tsx#cell"]={docgenInfo:cell.__docgenInfo,name:"cell",path:"src/cell.tsx#cell"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["children"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var styles=Object(emotion_react_browser_esm.a)({border:"none","&:hover":{backgroundColor:"#f8f8f8"}}),selectableStyles=Object(emotion_react_browser_esm.a)({"&:hover":{boxShadow:"0 0 0 2px #f8f8f8, -3px 0 0 2px "+colors.f},'&[aria-pressed="true"]':{backgroundColor:colors.e}}),row_RowContext=Object(react.createContext)({isSelected:!1}),row_Row=function Row(_ref){var children=_ref.children,props=_objectWithoutProperties(_ref,_excluded),table=Object(src_table.b)(),_useState2=_slicedToArray(Object(react.useState)(!1),2),isSelected=_useState2[0],setIsSelected=_useState2[1];return Object(emotion_react_jsx_runtime_browser_esm.a)(row_RowContext.Provider,{value:{isSelected:isSelected},children:Object(emotion_react_jsx_runtime_browser_esm.b)("tr",Object.assign({"aria-pressed":isSelected,css:[styles,table.isSelectable&&selectableStyles]},props,{children:[table.isSelectable&&Object(emotion_react_jsx_runtime_browser_esm.a)(src_cell,{children:Object(emotion_react_jsx_runtime_browser_esm.a)(esm_checkbox.a,{isChecked:isSelected,onChange:function onChange(){return setIsSelected((function(old){return!old}))}})}),children]}))})};row_Row.displayName="Row";var src_row=row_Row;try{row.displayName="row",row.__docgenInfo={description:"",displayName:"row",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/row.tsx#row"]={docgenInfo:row.__docgenInfo,name:"row",path:"src/row.tsx#row"})}catch(__react_docgen_typescript_loader_error){}var head_cell=__webpack_require__(170)},499:function(module,exports,__webpack_require__){__webpack_require__(500),__webpack_require__(656),__webpack_require__(657),__webpack_require__(873),__webpack_require__(874),__webpack_require__(879),__webpack_require__(880),__webpack_require__(878),__webpack_require__(875),__webpack_require__(881),__webpack_require__(876),__webpack_require__(877),__webpack_require__(882),module.exports=__webpack_require__(855)},567:function(module,exports){},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(354)},855:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(354).configure)([__webpack_require__(856),__webpack_require__(857)],module,!1)}).call(this,__webpack_require__(205)(module))},856:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=856},857:function(module,exports,__webpack_require__){var map={"./table-render.stories.tsx":858,"./table.stories.tsx":872};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=857},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RenderProp",(function(){return RenderProp}));__webpack_require__(11),__webpack_require__(445);var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_src_head_cell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(170),_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(229),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32),RenderProp=function RenderProp(_ref){var isSelectable=_ref.isSelectable;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.f,{isSelectable:isSelectable,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src_head_cell__WEBPACK_IMPORTED_MODULE_3__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,{children:"Name"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,{children:"Party"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,{children:"Year"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.d,{rows:_data__WEBPACK_IMPORTED_MODULE_4__.a,children:function children(row){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.c,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,{children:row.nm}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,{children:row.pp}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,{children:row.tm})]},row.id)}})]})};RenderProp.displayName="RenderProp",__webpack_exports__.default={title:"Table",component:RenderProp,argTypes:{isSelectable:{type:{name:"boolean",required:!1},defaultValue:!1}}},RenderProp.parameters=Object.assign({storySource:{source:"({ isSelectable }) => {\n  return (\n    <Table isSelectable={isSelectable}>\n      <THead>\n        <HeadCell>Name</HeadCell>\n        <HeadCell>Party</HeadCell>\n        <HeadCell>Year</HeadCell>\n      </THead>\n      <TBody<President> rows={presidents}>\n        {(row) => (\n          <Row key={row.id}>\n            <Cell>{row.nm}</Cell>\n            <Cell>{row.pp}</Cell>\n            <Cell>{row.tm}</Cell>\n          </Row>\n        )}\n      </TBody>\n    </Table>\n  )\n}"}},RenderProp.parameters);try{RenderProp.displayName="RenderProp",RenderProp.__docgenInfo={description:"Primary UI component for user interaction",displayName:"RenderProp",props:{isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/table-render.stories.tsx#RenderProp"]={docgenInfo:RenderProp.__docgenInfo,name:"RenderProp",path:"stories/table-render.stories.tsx#RenderProp"})}catch(__react_docgen_typescript_loader_error){}},872:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BasicExample",(function(){return BasicExample}));__webpack_require__(25),__webpack_require__(11),__webpack_require__(445);var _src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(47),_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(229),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32),BasicExample=function BasicExample(_ref){var isSelectable=_ref.isSelectable;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.f,{isSelectable:isSelectable,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.e,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{children:"Name"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{children:"Party"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.b,{children:"Year"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.d,{children:_data__WEBPACK_IMPORTED_MODULE_4__.a.map((function(row){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.c,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:row.nm}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:row.pp}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:row.tm})]},row.id)}))})]})};BasicExample.displayName="BasicExample",__webpack_exports__.default={title:"Table",component:BasicExample,argTypes:{isSelectable:{type:{name:"boolean",required:!1},defaultValue:!1}}},BasicExample.parameters=Object.assign({storySource:{source:"({ isSelectable }) => {\n  return (\n    <Table isSelectable={isSelectable}>\n      <THead>\n        <HeadCell>Name</HeadCell>\n        <HeadCell>Party</HeadCell>\n        <HeadCell>Year</HeadCell>\n      </THead>\n      <TBody>\n        {presidents.map((row) => (\n          <Row key={row.id}>\n            <Cell>{row.nm}</Cell>\n            <Cell>{row.pp}</Cell>\n            <Cell>{row.tm}</Cell>\n          </Row>\n        ))}\n      </TBody>\n    </Table>\n  )\n}"}},BasicExample.parameters);try{BasicExample.displayName="BasicExample",BasicExample.__docgenInfo={description:"Primary UI component for user interaction",displayName:"BasicExample",props:{isSelectable:{defaultValue:null,description:"",name:"isSelectable",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/table.stories.tsx#BasicExample"]={docgenInfo:BasicExample.__docgenInfo,name:"BasicExample",path:"stories/table.stories.tsx#BasicExample"})}catch(__react_docgen_typescript_loader_error){}},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(22),__webpack_require__(5),__webpack_require__(53),__webpack_require__(437),__webpack_require__(852),__webpack_require__(51),__webpack_require__(853),__webpack_require__(854),__webpack_require__(436);var client_api=__webpack_require__(893),types=__webpack_require__(891),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[499,2,3]]]);