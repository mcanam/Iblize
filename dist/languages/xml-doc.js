!function(n){function a(a,e){n.languages[a]&&n.languages.insertBefore(a,"comment",{"doc-comment":e})}var e=n.languages.markup.tag,t={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:e}},g={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:e}};a("csharp",t),a("fsharp",t),a("vbnet",g)}(Prism);