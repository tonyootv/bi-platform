define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.dim,f=(b.$cube,b.i,c.$escape),g=b.cubes,h=b.dateRelationTables,i=(b.$dateRelationTable,b.j,b.$dim,b.$index,b.defaultDate),j=(b.$level,b.$format,b.$field,"");return j+='<div class="dim-container-date hide j-date-main">\n    <ul class="date-column-names c-f">\n        <li class="date-column-names-main-table"><span>主数据表</span></li>\n        <li class="date-column-names-setting"><span>配置区</span></li>\n    </ul>\n    <!--循环cube列表（dim.normal）-->\n    ',d(e.date,function(a){j+='\n    <div class="date-main-box c-f j-date-main-box">\n        <span class="cube-name" cubeId=',j+=f(a.cubeId),j+=" title=",j+=f(g[a.cubeId].name),j+=">",j+=f(g[a.cubeId].name),j+='</span>\n        <span class="straight-line"></span>\n        ',"0"===a.children[0].relationTable||"ownertable"===a.children[0].relationTable?(j+='\n        <!--内置维度-->\n        <div class="date-relation-owner">\n            <div class="date-relation-owner-first-part c-f">\n                <span>选择被关联表：</span>\n                <select class="j-relation-table-select">\n                    <option value="0">请选择</option>\n                    <option value="ownertable"\n                    ',"ownertable"===a.children[0].relationTable&&(j+='\n                    selected = "selected"'),j+=">内置表</option>\n                    ",d(h,function(a){j+="\n                    <option value=",j+=f(a.id),j+=">",j+=f(a.name),j+="</option>\n                    "}),j+='\n                </select>\n            </div>\n            <div class="date-relation-owner-two-part c-f j-date-two-part">\n                <span>选择时间字段：</span>\n                <select>\n                    <option value="0">请选择</option>\n                    ',d(g[a.cubeId].currDims,function(b){j+="\n                    <option value=",j+=f(b.id),j+="\n                    ",b.id===a.children[0].currDim&&(j+='selected="selected"\n                    '),j+=">",j+=f(b.name),j+="\n                    </option>\n                    "}),j+='\n                </select>\n                <span>粒度：</span>\n                <select class="j-owner-date-level-select">\n                    <option value="0">请选择</option>\n                    ',d(i.level,function(b){j+="\n                    <option value=",j+=f(b.id),j+="\n                    ",b.id===a.children[0].field&&(j+='selected="selected"\n                    '),j+=">",j+=f(b.name),j+="\n                    </option>\n                    "}),j+='\n                </select>\n                <span>时间格式：</span>\n                <select class="j-owner-date-type-select">\n                    <option value="0">请选择</option>\n                    ',d(i.level,function(b){j+="\n                    ",b.id===a.children[0].field&&(j+="\n                    ",d(i.dateFormatOptions[a.children[0].field],function(b){j+="\n                    <option value=",j+=f(b),j+="\n                    ",b===a.children[0].format&&(j+='selected="selected"\n                    '),j+=">",j+=f(b),j+="</option>\n                    "}),j+="\n                    "),j+="\n                    "}),j+="\n                </select>\n            </div>\n        </div>\n        "):(j+='\n        <!--普通维度-->\n        <div class="date-relation-normal">\n            <div class="first-part c-f">\n                <span>选择被关联表：</span>\n                <!--内置表为0-->\n                <select class="j-relation-table-select">\n                    <option value="0">请选择</option>\n                    <option value="ownertable"\n                    ',"ownertable"===a.children[0].relationTable&&(j+='\n                    selected = "selected"'),j+=">内置表</option>\n                    ",d(h,function(b){j+="\n                    <option value=",j+=f(b.id),j+="\n                    ",b.id===a.children[0].relationTable&&(j+='\n                    selected = "selected"\n                    '),j+=">",j+=f(b.name),j+="</option>\n                    "}),j+='\n                </select>\n            </div>\n            <div class="date-relation-normal-two-part c-f j-date-two-part">\n                <span>指定关联字段：</span>\n                <select>\n                    <option value="0">请选择</option>\n                    ',d(g[a.cubeId].currDims,function(b){j+="\n                    <option value=",j+=f(b.id),j+="\n                    ",b.id===a.children[0].currDim&&(j+='selected="selected"\n                    '),j+=">",j+=f(b.name),j+="\n                    </option>\n                    "}),j+='\n                </select>\n                <span class="equal">=</span>\n\n                <select>\n                    <option value="0">请选择</option>\n                    ',d(h,function(b){j+="\n                    ",b.id===a.children[0].relationTable&&(j+="\n                    ",d(b.fields,function(b){j+="\n                    <option value=",j+=f(b.id),j+="\n                    ",b.id===a.children[0].field&&(j+='selected="selected"\n                    '),j+=">",j+=f(b.name),j+="\n                    </option>\n                    "}),j+="\n                    "),j+="\n                    "}),j+='\n                </select>\n            </div>\n            <!--需要去后台获取-->\n            <div class="date-relation-normal-three-part j-date-three-part">\n                <span class="date-relation-normal-three-part-name">日期格式：</span>\n                <div class="date-relation-normal-three-part-box c-f">\n                    ',d(h,function(b){j+="\n                    ",b.id===a.children[0].relationTable&&(j+="\n                    ",d(b.fields,function(c){j+='\n                    <div class="date-relation-normal-three-part-box-date-format c-f">\n                        <span>',j+=f(c.name),j+='</span>\n                        <select>\n                            <option value="0">请选择</option>\n                            ',d(b.dateFormatOptions[c.id],function(b){j+='\n                            <option value="',j+=f(b),j+='" ',b===a.children[0].dateLevel[c.id]&&(j+=' selected="selected" '),j+=">",j+=f(b),j+="\n                            </option>\n                            "}),j+="\n                        </select>\n                    </div>\n                    "}),j+="\n                    "),j+="\n                    "}),j+="\n                </div>\n            </div>\n        </div>\n        "),j+='\n        <span class="date-error-msg j-date-error-msg hide"></span>\n    </div>\n   '}),j+="\n</div>\n\n"}return{render:b}});