var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/thitemple/src/thi-contact/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AALBIFHV.css";

// route:/Users/thitemple/src/thi-contact/app/root.tsx
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
var meta = () => ({
  charset: "utf-8",
  title: "Thiago Temple's contact info",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-screen"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/thitemple/src/thi-contact/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function LineItem({ icon, uri, media, handle }) {
  return /* @__PURE__ */ React.createElement("li", {
    className: "rounded border border-purple-300 p-2 hover:bg-purple-100 focus:bg-purple-100 text-slate-900 hover:text-purple-900 focus:text-purple-900 transition-colors dark:text-slate-300 dark:hover:bg-purple-900 dark:hover:text-purple-300 dark:focus:bg-purple-900 dark:focus:text-purple-300"
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: uri,
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-2 opacity-70"
  }, icon), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("span", null, media), /* @__PURE__ */ React.createElement("span", {
    className: "opacity-60"
  }, handle)))));
}
function Index() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-col items-center justify-start  h-full rounded-md dark:bg-slate-900"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-purple-900 font-bold text-center my-4 text-4xl dark:text-purple-300"
  }, "Thiago Temple"), /* @__PURE__ */ React.createElement("h2", {
    className: "text-purple-900/75 text-center text-lg mb-2 dark:text-purple-500"
  }, "Staff Engineer"), /* @__PURE__ */ React.createElement("ul", {
    className: "px-2 grid md:grid-cols-2 gap-4 w-full lg:w-3/5 lg:max-w-7xl"
  }, /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://www.linkedin.com/in/thitemple/",
    media: "LinkedIn",
    handle: "@thitemple",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), " ", /* @__PURE__ */ React.createElement("rect", {
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    }), " ", /* @__PURE__ */ React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://templecoding.com",
    media: "Blog",
    handle: "templecoding.com",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://twitter.com/ThiagoTemple",
    media: "Twitter",
    handle: "@ThiagoTemple",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://github.com/thitemple",
    media: "GitHub",
    handle: "@thitemple",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://stackoverflow.com/users/186836/thitemple",
    media: "stackoverflow",
    handle: "@thitemple",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z"
    }), " ", /* @__PURE__ */ React.createElement("polyline", {
      points: "12 4 4 8 12 12 20 8 12 4"
    }), " ", /* @__PURE__ */ React.createElement("polyline", {
      points: "4 12 12 16 20 12"
    }), " ", /* @__PURE__ */ React.createElement("polyline", {
      points: "4 16 12 20 20 16"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "mailto:thitemple@hey.com",
    media: "E-mail",
    handle: "thitemple@hey.com",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), " ", /* @__PURE__ */ React.createElement("polyline", {
      points: "22,6 12,13 2,6"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://www.pluralsight.com/authors/thiago-temple",
    media: "On-line Courses",
    handle: "thiago-temple",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 ",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z"
    }), " ", /* @__PURE__ */ React.createElement("path", {
      d: "M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
    }), " ", /* @__PURE__ */ React.createElement("line", {
      x1: "13",
      y1: "8",
      x2: "15",
      y2: "8"
    }), " ", /* @__PURE__ */ React.createElement("line", {
      x1: "13",
      y1: "12",
      x2: "15",
      y2: "12"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://bit.ly/thiago-temple-resume",
    media: "Resume",
    handle: "My resume",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://boardgamegeek.com/user/vintem",
    media: "BoardGameGeek",
    handle: "vintem",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      stroke: "none",
      d: "M0 0h24v24H0z"
    }), " ", /* @__PURE__ */ React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2"
    }), " ", /* @__PURE__ */ React.createElement("circle", {
      cx: "8.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }), " ", /* @__PURE__ */ React.createElement("circle", {
      cx: "15.5",
      cy: "8.5",
      r: ".5",
      fill: "currentColor"
    }), " ", /* @__PURE__ */ React.createElement("circle", {
      cx: "15.5",
      cy: "15.5",
      r: ".5",
      fill: "currentColor"
    }), " ", /* @__PURE__ */ React.createElement("circle", {
      cx: "8.5",
      cy: "15.5",
      r: ".5",
      fill: "currentColor"
    }))
  }), /* @__PURE__ */ React.createElement(LineItem, {
    uri: "https://bit.ly/thitemple-youtube",
    media: "YouTube",
    handle: "Temple At Solo Gaming",
    icon: /* @__PURE__ */ React.createElement("svg", {
      className: "h-8 w-8 text-inherit",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, " ", /* @__PURE__ */ React.createElement("path", {
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
    }), " ", /* @__PURE__ */ React.createElement("polygon", {
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
    }))
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "8bcd922c", "entry": { "module": "/build/entry.client-3PM6ZBI6.js", "imports": ["/build/_shared/chunk-KCAHDXWN.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-KV47C6WU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-FHUQ6LYW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8BCD922C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
