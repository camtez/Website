!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.WebflowTools = t() : e.WebflowTools = t()
}(self, (function() {
    return e = {
        908: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleCheckbox = void 0;
            var i = r(966)
              , a = n(r(724));
            t.handleCheckbox = function(e, t) {
                i.filterParams.checkbox[t] || (i.filterParams.checkbox[t] = []);
                var r = e.checked
                  , n = e.nextElementSibling.innerText || ""
                  , l = e.dataset.filter ? e.dataset.filter.toLowerCase() : n.toLowerCase();
                return r ? (i.filterParams.checkbox[t].push(l),
                i.changeCurrentPage(1),
                a.default(i.filterParams)) : (i.filterParams.checkbox[t] = i.filterParams.checkbox[t].filter((function(e) {
                    return e !== l
                }
                )),
                i.filterParams.checkbox[t].length || delete i.filterParams.checkbox[t],
                i.changeCurrentPage(1),
                a.default(i.filterParams))
            }
        },
        697: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleInput = void 0;
            var i = r(966)
              , a = n(r(724));
            t.handleInput = function(e, t) {
                var r = e.value.toLowerCase() || "";
                i.filterParams.input[t] || (i.filterParams.input[t] = {});
                var n = e.dataset.inputIndex || "";
                return i.filterParams.input[t][n] = r,
                i.changeCurrentPage(1),
                a.default(i.filterParams)
            }
        },
        962: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleRadio = void 0;
            var i = r(966)
              , a = n(r(724));
            t.handleRadio = function(e, t) {
                var r;
                i.filterParams.radio[t] = [],
                e.checked;
                var n = (null === (r = e.nextElementSibling) || void 0 === r ? void 0 : r.textContent) || ""
                  , l = e.dataset.filter ? e.dataset.filter.toLowerCase() : n.toLowerCase();
                "*" !== l ? i.filterParams.radio[t].push(l) : delete i.filterParams.radio[t],
                i.changeCurrentPage(1),
                a.default(i.filterParams)
            }
        },
        471: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleRange = void 0;
            var i = r(966)
              , a = r(197)
              , l = n(r(724))
              , o = document.getElementsByTagName("head")[0]
              , s = a.createLink("https://cdn.jsdelivr.net/npm/jquery-ui-slider@1.12.1/jquery-ui.min.css")
              , c = a.createScript("https://cdn.jsdelivr.net/npm/jquery-ui-slider@1.12.1/jquery-ui.min.js");
            t.handleRange = function(e, t) {
                window.$().slider || (o.appendChild(s),
                o.appendChild(c));
                var r = document.querySelector("[" + i.selectors.rangeMinValueWrapperAttr + "]")
                  , n = document.querySelector("[" + i.selectors.rangeMaxValueWrapperAttr + "]")
                  , a = Number(e.getAttribute(i.selectors.rangeMinValueAttr))
                  , d = Number(e.getAttribute(i.selectors.rangeMaxValueAttr))
                  , f = e.getAttribute(i.selectors.rangeisDobuleAttr);
                null != a && null != d && (u(String(a), r),
                u(String(d), n),
                c.addEventListener("load", (function() {
                    window.$(e).slider({
                        range: !!f || "min",
                        min: a,
                        max: d,
                        value: d,
                        values: f && [a, d],
                        slide: function(e, t) {
                            f ? (u(String(t.values[0]), r),
                            u(String(t.values[1]), n)) : u(String(t.value), n)
                        },
                        stop: function(e, r) {
                            i.filterParams.range[t] = f ? [r.values[0], r.values[1]] : [a, r.value],
                            i.filterParams.range[t][0] === a && i.filterParams.range[t][1] === d && delete i.filterParams.range[t],
                            i.changeCurrentPage(1),
                            l.default(i.filterParams)
                        }
                    })
                }
                )))
            }
            ;
            var u = function(e, t) {
                t && (t.innerText = e)
            }
        },
        254: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleSelect = void 0;
            var i = r(966)
              , a = n(r(724));
            t.handleSelect = function(e, t) {
                var r = e.value.toLowerCase() || "";
                return i.filterParams.select[t] = [],
                r && "*" !== r ? i.filterParams.select[t].push(r) : delete i.filterParams.select[t],
                i.changeCurrentPage(1),
                a.default(i.filterParams)
            }
        },
        966: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.configurateFilter = t.selectors = t.changeCurrentPage = t.currentPage = t.filterParams = void 0,
            t.filterParams = {
                input: {},
                checkbox: {},
                select: {},
                radio: {},
                range: {}
            },
            t.currentPage = 1,
            t.changeCurrentPage = function(e) {
                t.currentPage = e
            }
            ,
            t.selectors = {
                filterWrapperAttr: "r-filter-wrapper",
                legacyFilterWrapperAttr: "b-filter-wrapper",
                filterElementsAttr: "r-filter",
                legacyFilterElementsAttr: "b-filter",
                indexedElementsAttr: "r-indexed",
                legacyIndexedElementsAttr: "b-indexed",
                emptyElement: "r-filter-empty",
                legacyEmptyElement: "c-filter_empty",
                paginationAttr: "r-filter-pagination",
                legacyPaginationAttr: "b-filter-pagination",
                paginationSelector: "r-pagination",
                legacyPaginationSelector: ".c-pagination",
                paginationCustomAttr: "r-filter-pagination-custom",
                paginationCustomPrevArrowAttr: "r-filter-pagination-custom-prev-arrow",
                paginationCustomNextArrowAttr: "r-filter-pagination-custom-next-arrow",
                paginationCustomTotalPages: "r-filter-pagination-custom-total-pages",
                paginationCustomCurrentPage: "r-filter-pagination-custom-current-page",
                paginationArrowPrevSelector: "r-pagination-arrow-prev",
                legacyPaginationArrowPrevSelector: ".c-pagination_arrow-prev",
                paginationArrowNextSelector: "r-pagination-arrow-next",
                legacyPaginationArrowNextSelector: ".c-pagination_arrow-next",
                loadMoreAttr: "r-filter-load-more",
                legacyLoadMoreAttr: "b-filter-load-more",
                loadMoreButtonAttr: "r-filter-load-more-button",
                legacyLoadMoreButtonAttr: "b-filter-load-more-button",
                isAdditiveAttr: "r-filter-additive",
                legacyIsAdditiveAttr: "b-filter-additive",
                totalElementsWrapperAttr: "r-filter-total-elements",
                legacyTotalElementsWrapperAttr: "b-filter-total-elements",
                visibleElementsWrapperAttr: "r-filter-visible-elements",
                legacyVisibleElementsWrapperAttr: "b-filter-visible-elements",
                rangeMinValueAttr: "min-value",
                rangeMaxValueAttr: "max-value",
                rangeisDobuleAttr: "double",
                rangeMinValueWrapperAttr: "r-filter-range-min",
                rangeMaxValueWrapperAttr: "r-filter-range-max",
                conditionalHiddenElementsClass: "w-condition-invisible",
                defaultFilter: "r-default-filter",
                inputSearchButton: "r-search-button"
            },
            t.configurateFilter = function() {
                var e = document.querySelector("[" + t.selectors.filterWrapperAttr + "], [" + t.selectors.legacyFilterWrapperAttr + "]")
                  , r = (null == e ? void 0 : e.hasAttribute(t.selectors.paginationAttr)) || (null == e ? void 0 : e.hasAttribute(t.selectors.legacyPaginationAttr))
                  , n = null == e ? void 0 : e.hasAttribute(t.selectors.paginationCustomAttr)
                  , i = parseInt((null == e ? void 0 : e.getAttribute(t.selectors.paginationAttr)) || (null == e ? void 0 : e.getAttribute(t.selectors.legacyPaginationAttr)) || "")
                  , a = (null == e ? void 0 : e.hasAttribute(t.selectors.isAdditiveAttr)) || (null == e ? void 0 : e.hasAttribute(t.selectors.legacyIsAdditiveAttr))
                  , l = (null == e ? void 0 : e.hasAttribute(t.selectors.loadMoreAttr)) && parseInt((null == e ? void 0 : e.getAttribute(t.selectors.loadMoreAttr)) || "") || (null == e ? void 0 : e.hasAttribute(t.selectors.legacyLoadMoreAttr)) && parseInt((null == e ? void 0 : e.getAttribute(t.selectors.legacyLoadMoreAttr)) || "");
                return {
                    pagination: r || !1,
                    itemsPerPage: i || l || 4,
                    paginationCustom: n || !1,
                    isAdditive: a || !1,
                    loadMore: l || !1,
                    totalElementsWrapper: document.querySelector("[" + t.selectors.totalElementsWrapperAttr + "], [" + t.selectors.legacyTotalElementsWrapperAttr + "]"),
                    visibleElementsWrapper: document.querySelector("[" + t.selectors.visibleElementsWrapperAttr + "], [" + t.selectors.legacyVisibleElementsWrapperAttr + "]")
                }
            }
        },
        643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleEmptyMsg = void 0;
            var n = r(966);
            r(448);
            var i = document.querySelector("[" + n.selectors.emptyElement + "], ." + n.selectors.legacyEmptyElement);
            t.handleEmptyMsg = function(e) {
                i || function(e) {
                    var r, a = document.querySelector("[" + n.selectors.filterWrapperAttr + "],[" + n.selectors.legacyFilterWrapperAttr + "]");
                    (i = document.createElement("div")).classList.add(n.selectors.legacyEmptyElement),
                    i.setAttribute(n.selectors.emptyElement, "1"),
                    i.innerHTML = "No items found.",
                    null === (r = null == a ? void 0 : a.closest(".w-dyn-list")) || void 0 === r || r.appendChild(i),
                    t.handleEmptyMsg(e)
                }(e),
                i.style.display = e ? "none" : ""
            }
        },
        724: function(e, t, r) {
            "use strict";
            var n = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                    e += arguments[t].length;
                var n = Array(e)
                  , i = 0;
                for (t = 0; t < r; t++)
                    for (var a = arguments[t], l = 0, o = a.length; l < o; l++,
                    i++)
                        n[i] = a[l];
                return n
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(154)
              , a = r(966)
              , l = r(638)
              , o = r(52)
              , s = r(746)
              , c = r(643)
              , u = r(641)
              , d = r(397)
              , f = r(993)
              , p = r(477);
            t.default = function(e) {
                var t = document.querySelectorAll("[" + a.selectors.filterWrapperAttr + "] > *, [" + a.selectors.legacyFilterWrapperAttr + "] > *") || ""
                  , r = 0;
                if (t.forEach((function(o) {
                    if (!o.hasAttribute(a.selectors.emptyElement) && !o.classList.contains(a.selectors.legacyEmptyElement)) {
                        for (var c = [], g = 0, m = Object.entries(e); g < m.length; g++) {
                            var v = m[g]
                              , h = v[0]
                              , y = v[1]
                              , A = Object.keys(y);
                            if (A.length)
                                switch (h) {
                                case "input":
                                    var E = d.handleFiltersText(A, o, y);
                                    c = n(c, E);
                                    continue;
                                case "checkbox":
                                case "radio":
                                    var b = u.handleFilterCheckboxes(A, o, y, i.filterConfig.isAdditive);
                                    c = n(c, b);
                                    continue;
                                case "range":
                                    var P = p.handleFilterRange(A, o, y);
                                    c = n(c, P);
                                    continue;
                                default:
                                    var _ = f.handleFilterOthers(A, o, y);
                                    c = n(c, _)
                                }
                        }
                        var x = c.every((function(e) {
                            return e
                        }
                        ));
                        return i.filterConfig.pagination || i.filterConfig.loadMore ? (function(e, t, r, n) {
                            if (e) {
                                var o = s.allVisibles ? n.length : i.filterConfig.itemsPerPage;
                                l.pagination(a.currentPage, t, o, r)
                            } else
                                t.style.display = "none"
                        }(x, o, r, t),
                        void (x && r++)) : (x && r++,
                        function(e, t) {
                            e.style.display = t ? "" : "none"
                        }(o, x))
                    }
                }
                )),
                c.handleEmptyMsg(r),
                i.filterConfig.pagination) {
                    if (i.filterConfig.paginationCustom)
                        return void o.createCustomPagination(r, i.filterConfig.itemsPerPage);
                    l.createPagination(r, i.filterConfig.itemsPerPage)
                }
                i.filterConfig.loadMore && s.createLoadMore(r),
                i.filterConfig.visibleElementsWrapper && (i.filterConfig.visibleElementsWrapper.innerText = String(r)),
                i.filterConfig.totalElementsWrapper && (i.filterConfig.totalElementsWrapper.innerText = String(t.length))
            }
        },
        641: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleFilterCheckboxes = void 0;
            var n = r(966);
            t.handleFilterCheckboxes = function(e, t, r, i) {
                var a = [];
                return e.forEach((function(e) {
                    var l = t.querySelectorAll("[" + n.selectors.indexedElementsAttr + '="' + e + '"], [' + n.selectors.legacyIndexedElementsAttr + '="' + e + '"]')
                      , o = [];
                    r[e].forEach((function(e) {
                        l.forEach((function(t) {
                            var r, n = (null === (r = t.textContent) || void 0 === r ? void 0 : r.toLowerCase().trim()) === e;
                            n && o.push(n)
                        }
                        ))
                    }
                    )),
                    i ? a.push(r[e].length === o.length) : a.push(o.length > 0)
                }
                )),
                a
            }
        },
        993: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleFilterOthers = void 0;
            var n = r(966);
            t.handleFilterOthers = function(e, t, r) {
                var i = [];
                return e.forEach((function(e) {
                    var a = t.querySelectorAll("[" + n.selectors.indexedElementsAttr + '="' + e + '"], [' + n.selectors.legacyIndexedElementsAttr + '="' + e + '"]')
                      , l = [];
                    a.forEach((function(t) {
                        r[e].forEach((function(e) {
                            var r, n = null === (r = t.textContent) || void 0 === r ? void 0 : r.toLowerCase().trim(), i = null == n ? void 0 : n.includes(e);
                            i && n && l.push(i)
                        }
                        ))
                    }
                    )),
                    i.push(l.length > 0)
                }
                )),
                i
            }
        },
        477: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleFilterRange = void 0;
            var n = r(966);
            t.handleFilterRange = function(e, t, r) {
                var i = [];
                return e.forEach((function(e) {
                    var a = t.querySelectorAll("[" + n.selectors.indexedElementsAttr + '="' + e + '"], [' + n.selectors.legacyIndexedElementsAttr + '="' + e + '"]');
                    if (a) {
                        var l = [];
                        a.forEach((function(e) {
                            var t = e.textContent;
                            if (t) {
                                var n = t >= r.range[0] && t <= r.range[1];
                                n && l.push(n)
                            }
                        }
                        )),
                        i.push(l.length > 0)
                    }
                }
                )),
                i
            }
        },
        397: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.handleFiltersText = void 0;
            var n = r(966)
              , i = r(197);
            t.handleFiltersText = function(e, t, r) {
                var a = [];
                return e.forEach((function(e) {
                    var l = t.querySelectorAll("[" + n.selectors.indexedElementsAttr + '="' + e + '"], [' + n.selectors.legacyIndexedElementsAttr + '="' + e + '"]')
                      , o = []
                      , s = 0;
                    l.forEach((function(t) {
                        for (var n, a = [], l = 0, c = Object.values(r[e]); l < c.length; l++) {
                            var u = c[l];
                            u.length > 0 && s++;
                            var d = null === (n = t.textContent) || void 0 === n ? void 0 : n.toLowerCase().trim();
                            if (d && (!(s > 0) || u)) {
                                var f = i.excludeSpecialChars(d).includes(i.excludeSpecialChars(u));
                                f && a.push(f)
                            }
                        }
                        a.length > 0 && o.push(!0),
                        a = []
                    }
                    )),
                    s = 0,
                    a.push(o.length > 0)
                }
                )),
                a
            }
        },
        154: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.filterConfig = void 0;
            var i = r(197)
              , a = r(908)
              , l = r(962)
              , o = r(697)
              , s = r(254)
              , c = r(471)
              , u = n(r(724))
              , d = r(966);
            r(915),
            r(448),
            t.filterConfig = d.configurateFilter(),
            document.querySelectorAll("[" + d.selectors.filterWrapperAttr + "] ." + d.selectors.conditionalHiddenElementsClass + ", [" + d.selectors.legacyFilterWrapperAttr + "] ." + d.selectors.conditionalHiddenElementsClass).forEach((function(e) {
                return e.remove()
            }
            )),
            document.querySelectorAll("[" + d.selectors.filterElementsAttr + "], [" + d.selectors.legacyFilterElementsAttr + "]").forEach((function(e, t) {
                var r = e.closest("form");
                null == r || r.addEventListener("submit", (function(e) {
                    return e.preventDefault()
                }
                ));
                var n = e.getAttribute(d.selectors.filterElementsAttr) || e.getAttribute(d.selectors.legacyFilterElementsAttr) || "";
                if ("range" !== n)
                    switch (e.localName) {
                    case "div":
                        e.querySelectorAll('input[type="checkbox"]').forEach((function(e) {
                            e.addEventListener("change", (function() {
                                return a.handleCheckbox(e, n)
                            }
                            )),
                            a.handleCheckbox(e, n)
                        }
                        )),
                        e.querySelectorAll('input[type="radio"]').forEach((function(e) {
                            e.addEventListener("change", (function() {
                                return l.handleRadio(e, n)
                            }
                            ))
                        }
                        ));
                        break;
                    case "input":
                        e.dataset.inputIndex = String(t);
                        var u = document.querySelector("[" + d.selectors.inputSearchButton + "]");
                        if (u) {
                            u.addEventListener("click", (function() {
                                return o.handleInput(e, n)
                            }
                            )),
                            e.addEventListener("change", (function(t) { // was keyup
                                "Enter" === t.code && o.handleInput(e, n)
                            }
                            ));
                            break
                        }
                        var f = i.debounce((function() {
                            o.handleInput(e, n)
                        }
                        ), 300);
                        e.addEventListener("change", f), // was keyup
                        o.handleInput(e, n);
                        break;
                    case "select":
                        e.addEventListener("change", (function() {
                            return s.handleSelect(e, n)
                        }
                        )),
                        s.handleSelect(e, n)
                    }
                else
                    c.handleRange(e, n)
            }
            )),
            u.default(d.filterParams),
            setTimeout((function() {
                document.querySelectorAll("[" + d.selectors.filterElementsAttr + "], [" + d.selectors.legacyFilterElementsAttr + "]").forEach((function(e, t) {
                    "div" === e.localName && (e.querySelectorAll('input[type="checkbox"]:checked').forEach((function(e) {
                        e.checked = !1
                    }
                    )),
                    e.querySelectorAll('input[type="radio"]:checked').forEach((function(e) {
                        e.checked = !1
                    }
                    )))
                }
                )),
                document.querySelectorAll("[" + d.selectors.defaultFilter + "]").forEach((function(e) {
                    e.click()
                }
                ))
            }
            ), 200)
        },
        52: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.createCustomPagination = void 0;
            var i, a, l, o, s, c, u = r(966), d = n(r(724));
            function f(e) {
                var t;
                if ("prev" === e) {
                    if (1 === u.currentPage)
                        return;
                    t = u.currentPage - 1
                } else {
                    if (u.currentPage === c)
                        return;
                    t = u.currentPage + 1
                }
                u.changeCurrentPage(t);
                var r = document.querySelector("[" + u.selectors.filterElementsAttr + "], [" + u.selectors.legacyFilterElementsAttr + "]");
                null == r || r.scrollIntoView(),
                d.default(u.filterParams)
            }
            !function(e) {
                e.next = "next",
                e.prev = "prev"
            }(i || (i = {})),
            t.createCustomPagination = function(e, t) {
                a && l && o && s || (a = document.querySelector("[" + u.selectors.paginationCustomPrevArrowAttr + "]"),
                l = document.querySelector("[" + u.selectors.paginationCustomNextArrowAttr + "]"),
                o = document.querySelector("[" + u.selectors.paginationCustomTotalPages + "]"),
                s = document.querySelector("[" + u.selectors.paginationCustomCurrentPage + "]"),
                a.addEventListener("click", (function() {
                    return f(i.prev)
                }
                )),
                l.addEventListener("click", (function() {
                    return f(i.next)
                }
                ))),
                c = Math.ceil(e / t),
                u.currentPage === Number(s.innerText) && c === Number(o.innerText) || (o.innerText = c,
                s.innerText = u.currentPage,
                a.classList.remove("cc-disabled"),
                l.classList.remove("cc-disabled"),
                u.currentPage === c && l.classList.add("cc-disabled"),
                1 === u.currentPage && a.classList.add("cc-disabled"))
            }
        },
        638: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.pagination = t.createPagination = void 0;
            var i, a, l, o, s, c, u = r(966), d = n(r(724));
            function f(e) {
                var t = document.createElement("span");
                return t.innerHTML = e + "",
                t.style.cursor = "pointer",
                t.classList.add("c-pagination_number"),
                e === u.currentPage && t.classList.add("c-current"),
                t
            }
            function p(e) {
                var t = document.querySelector(".c-pagination_number.c-current");
                null == t || t.classList.remove("c-current");
                var r = "prev" === e ? null == t ? void 0 : t.previousElementSibling : null == t ? void 0 : t.nextElementSibling;
                r.classList.add("c-current"),
                u.changeCurrentPage(Number(r.innerText));
                var n = document.querySelector("[" + u.selectors.filterElementsAttr + "], [" + u.selectors.legacyFilterElementsAttr + "]");
                null == n || n.scrollIntoView(),
                d.default(u.filterParams)
            }
            !function(e) {
                e.next = "next",
                e.prev = "prev"
            }(i || (i = {})),
            t.createPagination = function(e, t) {
                a && l && o && c || (a = document.querySelector("[" + u.selectors.paginationSelector + "], " + u.selectors.legacyPaginationSelector),
                l = document.querySelector("[" + u.selectors.paginationArrowPrevSelector + "], " + u.selectors.legacyPaginationArrowPrevSelector),
                o = document.querySelector("[" + u.selectors.paginationArrowNextSelector + "], " + u.selectors.legacyPaginationArrowNextSelector),
                (s = l || o) || (l = document.createElement("button"),
                o = document.createElement("button"),
                l.classList.add("c-pagination_arrow", "cc-prev"),
                o.classList.add("c-pagination_arrow", "cc-next"),
                o.innerHTML = "Next",
                l.innerHTML = "Prev"),
                l.addEventListener("click", (function() {
                    var e = new CustomEvent("goToPrev");
                    a.dispatchEvent(e),
                    p(i.prev);
                    var t = new CustomEvent("pageChange");
                    a.dispatchEvent(t)
                }
                )),
                o.addEventListener("click", (function() {
                    var e = new CustomEvent("goToNext");
                    a.dispatchEvent(e),
                    p(i.next);
                    var t = new CustomEvent("pageChange");
                    a.dispatchEvent(t)
                }
                )),
                (c = document.createElement("div")).classList.add("c-pagination_numbers-wrapper")),
                c && (c.innerHTML = "");
                var r = Math.ceil(e / t);
                s || null == a || a.appendChild(l),
                l.style.display = "",
                1 !== u.currentPage && r || (l.style.display = "none"),
                null == a || a.appendChild(c);
                for (var n = 1; n <= r; n++) {
                    var g = f(n);
                    if (g.style.display = "none",
                    null == c || c.appendChild(g),
                    g.addEventListener("click", (function() {
                        var e, t = new CustomEvent("goTo" + Number(this.innerText));
                        a.dispatchEvent(t),
                        null === (e = document.querySelector(".c-pagination_number.c-current")) || void 0 === e || e.classList.remove("c-current"),
                        this.classList.add("c-current"),
                        u.changeCurrentPage(Number(this.innerText));
                        var r = document.querySelector("[" + u.selectors.filterElementsAttr + "], [" + u.selectors.legacyFilterElementsAttr + "]");
                        null == r || r.scrollIntoView(),
                        d.default(u.filterParams);
                        var n = new CustomEvent("pageChange");
                        a.dispatchEvent(n)
                    }
                    )),
                    (n >= u.currentPage - 2 && n <= u.currentPage + 4 || n === r || 1 === n) && (g.style.display = ""),
                    n === u.currentPage + 4 && u.currentPage + 4 < r || u.currentPage > 3 && 1 === n) {
                        var m = document.createElement("span");
                        m.innerHTML = "...",
                        c.appendChild(m)
                    }
                }
                s || null == a || a.appendChild(o),
                o.style.display = "",
                u.currentPage !== r && r || (o.style.display = "none")
            }
            ,
            t.pagination = function(e, t, r, n) {
                t.style.display = n < e * r && n >= e * r - r ? "" : "none"
            }
        },
        746: function(e, t, r) {
            "use strict";
            var n = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.loadMoreButtonDisplay = t.createLoadMore = t.allVisibles = void 0;
            var i, a = r(966), l = n(r(724)), o = r(154);
            t.allVisibles = !1,
            t.createLoadMore = function(e) {
                i || null == (i = document.querySelector("[" + a.selectors.loadMoreButtonAttr + "], [" + a.selectors.legacyLoadMoreButtonAttr + "]")) || i.addEventListener("click", (function() {
                    return s()
                }
                )),
                t.allVisibles || e <= o.filterConfig.itemsPerPage ? t.loadMoreButtonDisplay("none") : t.loadMoreButtonDisplay(""),
                t.allVisibles = !1
            }
            ;
            var s = function() {
                t.allVisibles = !0,
                l.default(a.filterParams)
            };
            t.loadMoreButtonDisplay = function(e) {
                document.querySelector("[" + a.selectors.loadMoreButtonAttr + "], [" + a.selectors.legacyLoadMoreButtonAttr + "]").style.display = e
            }
        },
        197: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.excludeSpecialChars = t.createLink = t.createScript = t.debounce = void 0,
            t.debounce = function(e, t, r) {
                var n;
                return function() {
                    for (var i = [], a = 0; a < arguments.length; a++)
                        i[a] = arguments[a];
                    var l = function() {
                        n = null,
                        r || e.apply(this, i)
                    }
                      , o = r && !n;
                    clearTimeout(n),
                    n = setTimeout(l, t),
                    o && e.apply(this, i)
                }
            }
            ,
            t.createScript = function(e) {
                var t = document.createElement("script");
                return t.type = "text/javascript",
                t.setAttribute("src", e),
                t
            }
            ,
            t.createLink = function(e) {
                var t = document.createElement("link");
                return t.rel = "stylesheet",
                t.setAttribute("href", e),
                t
            }
            ,
            t.excludeSpecialChars = function(e) {
                return e.replace(/[^a-zA-Z0-9 ]/g, "")
            }
        },
        448: function() {
            "undefined" != typeof Element && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            Element.prototype.closest || (Element.prototype.closest = function(e) {
                var t = this;
                do {
                    if (t.matches(e))
                        return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            }
            ))
        },
        915: function() {
            "document"in self && ("classList"in document.createElement("_") && (!document.createElementNS || "classList"in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
                "use strict";
                if ("Element"in e) {
                    var t = "classList"
                      , r = "prototype"
                      , n = e.Element[r]
                      , i = Object
                      , a = String[r].trim || function() {
                        return this.replace(/^\s+|\s+$/g, "")
                    }
                      , l = Array[r].indexOf || function(e) {
                        for (var t = 0, r = this.length; r > t; t++)
                            if (t in this && this[t] === e)
                                return t;
                        return -1
                    }
                      , o = function(e, t) {
                        this.name = e,
                        this.code = DOMException[e],
                        this.message = t
                    }
                      , s = function(e, t) {
                        if ("" === t)
                            throw new o("SYNTAX_ERR","The token must not be empty.");
                        if (/\s/.test(t))
                            throw new o("INVALID_CHARACTER_ERR","The token must not contain space characters.");
                        return l.call(e, t)
                    }
                      , c = function(e) {
                        for (var t = a.call(e.getAttribute("class") || ""), r = t ? t.split(/\s+/) : [], n = 0, i = r.length; i > n; n++)
                            this.push(r[n]);
                        this._updateClassName = function() {
                            e.setAttribute("class", this.toString())
                        }
                    }
                      , u = c[r] = []
                      , d = function() {
                        return new c(this)
                    };
                    if (o[r] = Error[r],
                    u.item = function(e) {
                        return this[e] || null
                    }
                    ,
                    u.contains = function(e) {
                        return ~s(this, e + "")
                    }
                    ,
                    u.add = function() {
                        var e, t = arguments, r = 0, n = t.length, i = !1;
                        do {
                            e = t[r] + "",
                            ~s(this, e) || (this.push(e),
                            i = !0)
                        } while (++r < n);
                        i && this._updateClassName()
                    }
                    ,
                    u.remove = function() {
                        var e, t, r = arguments, n = 0, i = r.length, a = !1;
                        do {
                            for (e = r[n] + "",
                            t = s(this, e); ~t; )
                                this.splice(t, 1),
                                a = !0,
                                t = s(this, e)
                        } while (++n < i);
                        a && this._updateClassName()
                    }
                    ,
                    u.toggle = function(e, t) {
                        var r = this.contains(e)
                          , n = r ? !0 !== t && "remove" : !1 !== t && "add";
                        return n && this[n](e),
                        !0 === t || !1 === t ? t : !r
                    }
                    ,
                    u.replace = function(e, t) {
                        var r = s(e + "");
                        ~r && (this.splice(r, 1, t),
                        this._updateClassName())
                    }
                    ,
                    u.toString = function() {
                        return this.join(" ")
                    }
                    ,
                    i.defineProperty) {
                        var f = {
                            get: d,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            i.defineProperty(n, t, f)
                        } catch (e) {
                            void 0 !== e.number && -2146823252 !== e.number || (f.enumerable = !1,
                            i.defineProperty(n, t, f))
                        }
                    } else
                        i[r].__defineGetter__ && n.__defineGetter__(t, d)
                }
            }(self),
            function() {
                "use strict";
                var e = document.createElement("_");
                if (e.classList.add("c1", "c2"),
                !e.classList.contains("c2")) {
                    var t = function(e) {
                        var t = DOMTokenList.prototype[e];
                        DOMTokenList.prototype[e] = function(e) {
                            var r, n = arguments.length;
                            for (r = 0; n > r; r++)
                                e = arguments[r],
                                t.call(this, e)
                        }
                    };
                    t("add"),
                    t("remove")
                }
                if (e.classList.toggle("c3", !1),
                e.classList.contains("c3")) {
                    var r = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(e, t) {
                        return 1 in arguments && !this.contains(e) == !t ? t : r.call(this, e)
                    }
                }
                "replace"in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(e, t) {
                    var r = this.toString().split(" ")
                      , n = r.indexOf(e + "");
                    ~n && (r = r.slice(n),
                    this.remove.apply(this, r),
                    this.add(t),
                    this.add.apply(this, r.slice(1)))
                }
                ),
                e = null
            }())
        }
    },
    t = {},
    function r(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r),
        a.exports
    }(154);
    var e, t
}
));