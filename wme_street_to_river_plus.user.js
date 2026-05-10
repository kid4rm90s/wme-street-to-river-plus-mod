// ==UserScript==
// @name            WME Street to River PLUS (mod)
// @description     This script create a new river landmark in waze map editor (WME). It transforms the the geometry of a new unsaved street to a polygon.
// @namespace       https://greasyfork.org/users/160654-waze-ukraine
// @grant           none
// @version         2026.05.09.003
// @match           https://beta.waze.com/*editor*
// @match           https://www.waze.com/*editor*
// @exclude         https://www.waze.com/*user/*editor/*
// @icon data:image/png;base64,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
// @require         https://update.greasyfork.org/scripts/450160/1704233/WME-Bootstrap.js
// @downloadURL     https://update.greasyfork.org/scripts/457548/WME%20Street%20to%20River%20PLUS%20%28mod%29.user.js
// @updateURL       https://update.greasyfork.org/scripts/457548/WME%20Street%20to%20River%20PLUS%20%28mod%29.meta.js
// ==/UserScript==

// Based on WME Street to river

// Mini howto:
// 1) install this script as greasemonkey script or chrome extension
// 2) draw a new street but do not save the street
// 3) add and apply a street name to define the rivers name and the width of the river
//    Example: "20m Spree" — constant 20 m width, named "Spree"
//    Example: "5m-15m Spree" (or 5м–15м) — width from 5 m at the first vertex to 15 m at the last, along segment length
//    If the name has no width prefix, use the panel: either one width for the whole river (checkbox) or start and end selects.
// 4) Select the helper street
// 5) Click the "Street to river" button
// 4) Delete the helper street
// 5) Edit the new landmark as you like
//
// Updated by: Eduardo Carvajal

/* jshint esversion: 11 */
/* global W */
/* global I18n */
/* global OpenLayers */
/* global $ */
/* global require */

console.warn('Remove this line, when WME-Bootstrap will fix its syntax. now it causes script error on load, details https://stackoverflow.com/questions/42036349/uncaught-typeerror-intermediate-value-is-not-a-function');

(function () {
  const version = GM_info.script.version

  //const unused = 0;
  const idWidth = 1
  const idTitle = 2
  const idStreetToRiver = 3
  const idUnlimitedSize = 4
  const idNoUsavedStreet = 5
  const idAllSegmentsInside = 6
  const idMultipleSegmentsInside = 7
  const idStreetToOther = 8
  const idStreetToForest = 9
  const idDeleteSegment = 10
  const idStreetToCanal = 11
  const idWidthEnd = 12
  const idWidthUniform = 13

  const WIDTH_MIN = 0.5
  const WIDTH_MAX = 2000
  const WIDTH_SELECT_VALUES = (function () {
    var a = []
    for (var wi = 1; wi <= 10; wi++) a.push(wi)
    return a.concat([11, 12, 13, 15, 17, 20, 25, 30, 40, 50, 80, 100, 120, 150, 180, 200])
  })()

  function streetToRiver_bootstrap () {
    $(document)
      .on('bootstrap.wme', function () {
        streetToRiver_init()
      })
  }

  function streetToRiver_init () {
    const defaultWidth = 15
    var scriptLanguage = 'us'
    var langText
    {
      var Config = [
        {
          handler: 'WME-Street-to-River_other',
          title: 'Other',
          func: function (ev) {
            doPOI(ev, 'OTHER')
          },
          key: -1,
          arg: {
            type: 'OTHER',
          },
        },
        {
          handler: 'WME-Street-to-River_river',
          title: 'River',
          func: function (ev) {
            doPOI(ev, 'RIVER_STREAM')
          },
          key: -1,
          arg: {
            type: 'RIVER_STREAM',
          },
        },
        {
          handler: 'WME-Street-to-River_forest',
          title: 'Forest',
          func: function (ev) {
            doPOI(ev, 'FOREST_GROVE')
          },
          key: -1,
          arg: {
            type: 'FOREST_GROVE',
          },
        },
        {
          handler: 'WME-Street-to-River_canal',
          title: 'Canal',
          func: function (ev) {
            doPOI(ev, 'CANAL')
          },
          key: -1,
          arg: {
            type: 'CANAL',
          },
        },
      ]

      for (var i = 0; i < Config.length; ++i) {
        WMEKSRegisterKeyboardShortcut('WME-Street-to-River', 'WME-Street-to-River', Config[i].handler, Config[i].title, Config[i].func, Config[i].key, Config[i].arg)
      }

      WMEKSLoadKeyboardShortcuts('WME-Street-to-River')

      window.addEventListener('beforeunload', function () {
        WMEKSSaveKeyboardShortcuts('WME-Street-to-River')
      }, false)
    }

    function insertButtons () {
      if (W.selectionManager.getSelectedWMEFeatures().length === 0)
        return

      var btn0 = $('<wz-button size="sm" color="submit" title="' + getString(idTitle) + '">' + getString(idStreetToOther) + '</wz-button>')
      btn0.click(doOther)

      var btn1 = $('<wz-button size="sm" color="submit" title="' + getString(idTitle) + '">' + getString(idStreetToRiver) + '</wz-button>')
      btn1.click(doRiver)

      var btn2 = $('<wz-button size="sm" color="submit" title="' + getString(idTitle) + '">' + getString(idStreetToForest) + '</wz-button>')
      btn2.click(doForest)
      var btn3 = $('<wz-button size="sm" color="submit" title="' + getString(idTitle) + '">' + getString(idStreetToCanal) + '</wz-button>')
      btn3.click(doCanal)

      var selRiverWidth = $('<wz-select name="riverWidth" />')
      for (let w = 0; w < WIDTH_SELECT_VALUES.length; w++) {
        selRiverWidth.append($(`<wz-option value="${WIDTH_SELECT_VALUES[w]}">${WIDTH_SELECT_VALUES[w]}</wz-option>`))
      }
      selRiverWidth.change(function () {
        setLastRiverWidth(this.value)
        if (chkUniformWidth.prop('checked')) {
          setLastRiverWidthEnd(this.value)
          selRiverWidthEnd.val(this.value)
        }
      })

      var lastRiverWidth = getLastRiverWidth(defaultWidth)
      console_log('Last river width: ' + lastRiverWidth)
      selRiverWidth.val(lastRiverWidth)

      var selRiverWidthEnd = $('<wz-select name="riverWidthEnd" />')
      for (let we = 0; we < WIDTH_SELECT_VALUES.length; we++) {
        selRiverWidthEnd.append($(`<wz-option value="${WIDTH_SELECT_VALUES[we]}">${WIDTH_SELECT_VALUES[we]}</wz-option>`))
      }
      selRiverWidthEnd.change(function () {
        setLastRiverWidthEnd(this.value)
      })
      var lastRiverWidthEnd = getLastRiverWidthEnd(defaultWidth)
      selRiverWidthEnd.val(lastRiverWidthEnd)
      if (getLastRiverWidthUniform(true)) {
        setLastRiverWidthEnd(lastRiverWidth)
        selRiverWidthEnd.val(lastRiverWidth)
      }

      var chkUniformWidth = $('<wz-checkbox name="_riverWidthUniform">' + getString(idWidthUniform) + '</wz-checkbox>')
      chkUniformWidth.prop('checked', getLastRiverWidthUniform(true))
      chkUniformWidth.change(function () {
        setLastRiverWidthUniform(this.checked)
        if (this.checked) {
          var v = selRiverWidth.val()
          setLastRiverWidthEnd(v)
          selRiverWidthEnd.val(v)
        }
        updateRiverWidthPanelTaperVisibility()
      })

      var wrapTaperWidths = $('<span class="str2riv-taper-widths" style="display:inline-flex;flex-wrap:wrap;align-items:center;gap:6px" />')
      wrapTaperWidths.append($('<wz-label html-for>' + getString(idWidthEnd) + '</wz-label>'))
      wrapTaperWidths.append(selRiverWidthEnd)

      function updateRiverWidthPanelTaperVisibility () {
        var showTaper = !chkUniformWidth.prop('checked')
        wrapTaperWidths.css('display', showTaper ? 'inline-flex' : 'none')
      }
      updateRiverWidthPanelTaperVisibility()

      var chk = $('<wz-checkbox title="' + getString(idUnlimitedSize) + '" name="_isUnlimitedSize" >' + getString(idUnlimitedSize) + '</wz-checkbox>')
      chk.prop('checked', getLastIsUnlimitedSize(false))
      chk.change(function () {
        setLastIsUnlimitedSize(this.checked)
      })
      var chkDel = $('<wz-checkbox name="_isDeleteSegment" >' + getString(idDeleteSegment) + '</wz-checkbox>')
      chkDel.prop('checked', getLastIsDeleteSegment(true))
      chkDel.change(function () {
        setLastIsDeleteSegment(this.checked)
      })

      var cnt = $('<div class="form-group" />')
      var label = $('<wz-label><a href="https://github.com/waze-ua/wme-street-to-river-plus-mod" target="_blank">Street to River+ (Mod) v' + version + '</a></wz-label>')
      cnt.append(label)

      var divGroup1 = $('<div class="controls-container" />')
      divGroup1.append($('<wz-label html-for>' + getString(idWidth) + '</wz-label>'))
      divGroup1.append(selRiverWidth)
      divGroup1.append(wrapTaperWidths)
      divGroup1.append(chkUniformWidth)

      var divGroup2 = $('<div class="controls-container" />')
      divGroup2.append(chk)
      divGroup2.append(chkDel)

      var divGroup3 = $('<div class="controls-container" />')
      divGroup3.append(btn0)
      divGroup3.append(btn1)
      divGroup3.append(btn2)
      divGroup3.append(btn3)

      cnt.append(divGroup1)
      cnt.append(divGroup2)
      cnt.append(divGroup3)

      $('#segment-edit-general form.attributes-form').after(cnt)

      console_log('Street to River Language: ' + scriptLanguage)
      console_log('Street to river PLUS initialized')
    }

    function doPOI (ev, typ) {
      var convertOK
      var foundSelectedSegment = false

      var isUnlimitedSize = getLastIsUnlimitedSize(false)
      var isDeleteSegment = getLastIsDeleteSegment(true)

      // 2014-01-09: Search for helper street. If found create or expand a river
      for (var s = W.selectionManager.getSelectedWMEFeatures().length - 1; s >= 0; s--) {
        var sel = W.selectionManager.getSelectedWMEFeatures()[s]._wmeObject
        if (sel.type === 'segment') {
          // found segment
          foundSelectedSegment = true
          convertOK = convertToLandmark(sel, typ, isUnlimitedSize)
          if (convertOK && isDeleteSegment) {
            var wazeActionDeleteSegment = require('Waze/Action/DeleteSegment')
            W.model.actionManager.add(new wazeActionDeleteSegment(sel))
          }
        }
      }
      if (!foundSelectedSegment) {
        alert(getString(idNoUsavedStreet))
      }

    }

    function doRiver (ev) {
      doPOI(ev, 'RIVER_STREAM')
    }

    function doForest (ev) {
      doPOI(ev, 'FOREST_GROVE')
    }

    function doOther (ev) {
      doPOI(ev, 'OTHER')
    }

    function doCanal (ev) {
      doPOI(ev, 'CANAL')
    }

    function CalcRL (components) {
      var count = components.length
      var j = count - 1
      var area = 0

      for (var i = 0; i < count; ++i) {
        area += (components[i].y * components[j].x) - (components[i].x * components[j].y)
        j = i
      }
      return area < 0 ? 1 : -1 // 1 - по часовой, -1 - против часовой
    }

    function uniq (a) {
      var seen = {}
      return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true)
      })
    }

    function clampWidthMeters (n, fallbackMeters) {
      var x = Number(n)
      var fb = Number(fallbackMeters)
      if (!Number.isFinite(x) || x <= 0) x = Number.isFinite(fb) && fb > 0 ? fb : 15
      return Math.min(WIDTH_MAX, Math.max(WIDTH_MIN, x))
    }

    /** @returns {{ start: number, end: number }|null} */
    function parseWidthRangeMetersFromName (name) {
      if (!name || typeof name !== 'string') return null
      var s = name.trim()
      var mRange = /^(\d+(?:\.\d+)?)\s*(m|м)\s*[-–—]\s*(\d+(?:\.\d+)?)\s*(m|м)\b/i
      if (mRange.test(s)) {
        return {
          start: clampWidthMeters(RegExp.$1, defaultWidth),
          end: clampWidthMeters(RegExp.$3, defaultWidth)
        }
      }
      var ftRange = /^(\d+(?:\.\d+)?)\s*ft\s*[-–—]\s*(\d+(?:\.\d+)?)\s*ft\b/i
      if (ftRange.test(s)) {
        return {
          start: clampWidthMeters(parseFloat(RegExp.$1) * 0.3048, defaultWidth),
          end: clampWidthMeters(parseFloat(RegExp.$2) * 0.3048, defaultWidth)
        }
      }
      return null
    }

    /** @returns {number|null} */
    function parseSingleWidthMetersFromName (name) {
      if (!name || typeof name !== 'string') return null
      var s = name.trim()
      if (/^(\d+(?:\.\d+)?)\s*(m|м)\b/i.test(s))
        return clampWidthMeters(RegExp.$1, defaultWidth)
      if (/^(\d+(?:\.\d+)?)\s*ft\b/i.test(s))
        return clampWidthMeters(parseFloat(RegExp.$1) * 0.3048, defaultWidth)
      return null
    }

    function getRiverWidthRangeFromStreetAndPanel (street) {
      var name = street && street.attributes && street.attributes.name
        ? String(street.attributes.name).trim() : ''
      var range = parseWidthRangeMetersFromName(name)
      if (range) return range
      var one = parseSingleWidthMetersFromName(name)
      if (one != null) return { start: one, end: one }
      var wStart = clampWidthMeters(getLastRiverWidth(defaultWidth), defaultWidth)
      if (getLastRiverWidthUniform(true))
        return { start: wStart, end: wStart }
      return {
        start: wStart,
        end: clampWidthMeters(getLastRiverWidthEnd(defaultWidth), defaultWidth)
      }
    }

    function vertexWidthsMeters (vertices, wStart, wEnd) {
      var n = vertices.length
      if (n === 0) return []
      if (n === 1) return [clampWidthMeters(wStart, defaultWidth)]
      var cumulative = [0]
      var total = 0
      var proj = W.map.getProjectionObject()
      for (var i = 0; i < n - 1; i++) {
        var ls = new OpenLayers.Geometry.LineString([vertices[i], vertices[i + 1]])
        total += ls.getGeodesicLength(proj)
        cumulative.push(total)
      }
      var out = []
      for (var j = 0; j < n; j++) {
        var t = total === 0 ? 0 : cumulative[j] / total
        out.push(wStart + t * (wEnd - wStart))
      }
      return out
    }

    function stripRiverWidthPrefixFromStreetName (name) {
      if (name == null) return ''
      var s = String(name)
      s = s.replace(/^\d+(?:\.\d+)?\s*(?:m|м)\s*[-–—]\s*\d+(?:\.\d+)?\s*(?:m|м)\s*/i, '')
      s = s.replace(/^\d+(?:\.\d+)?\s*ft\s*[-–—]\s*\d+(?:\.\d+)?\s*ft\s*/i, '')
      s = s.replace(/^\d+(?:\.\d+)?\s*(?:m|м)\s*/i, '')
      s = s.replace(/^\d+(?:\.\d+)?\s*ft\s*/i, '')
      return s.trim()
    }

    function riverRingEdgesShareVertex (i, j, n) {
      var i2 = (i + 1) % n
      var j2 = (j + 1) % n
      return i === j || i === j2 || i2 === j || i2 === j2
    }

    /** Proper interior intersection (excluding endpoints); map XY. */
    function segmentProperIntersectionXY (a, b, c, d, eps) {
      var e = eps == null ? 1e-9 : eps
      var rx = b.x - a.x, ry = b.y - a.y
      var sx = d.x - c.x, sy = d.y - c.y
      var denom = rx * sy - ry * sx
      if (Math.abs(denom) < e) return null
      var qpx = c.x - a.x, qpy = c.y - a.y
      var t = (qpx * sy - qpy * sx) / denom
      var u = (qpx * ry - qpy * rx) / denom
      if (t <= e || t >= 1 - e || u <= e || u >= 1 - e) return null
      return { x: a.x + t * rx, y: a.y + t * ry }
    }

    /** Fallback: point on first segment (clamped) when segments touch/cross. */
    function intersectionOnSegmentsClampedXY (a, b, c, d) {
      var rx = b.x - a.x, ry = b.y - a.y
      var sx = d.x - c.x, sy = d.y - c.y
      var denom = rx * sy - ry * sx
      if (Math.abs(denom) < 1e-14) return null
      var qpx = c.x - a.x, qpy = c.y - a.y
      var t = (qpx * sy - qpy * sx) / denom
      var u = (qpx * ry - qpy * rx) / denom
      if (t < -1e-6 || t > 1 + 1e-6 || u < -1e-6 || u > 1 + 1e-6) return null
      var tt = Math.max(0, Math.min(1, t))
      return { x: a.x + tt * rx, y: a.y + tt * ry }
    }

    function findRiverRingCrossingEdgePair (pts) {
      var n = pts.length
      if (n < 4) return null
      for (var i = 0; i < n; i++) {
        var ia = (i + 1) % n
        for (var j = i + 1; j < n; j++) {
          if (riverRingEdgesShareVertex(i, j, n)) continue
          var ja = (j + 1) % n
          if (isIntersectingLines(pts[i], pts[ia], pts[j], pts[ja]))
            return { i: i, j: j }
        }
      }
      return null
    }

    function riverRingSelfIntersects (pts) {
      return findRiverRingCrossingEdgePair(pts) != null
    }

    /**
     * Cut a self-crossing loop: rotate by i, replace chain r[1]..r[jR] with vertex I.
     * Returns new ring or null if cut would delete the anchor index or is degenerate.
     */
    function applyRiverRingSpliceAt (pts, i, j, I) {
      var n = pts.length
      var jR = (j - i + n) % n
      if (jR < 2 || jR >= n - 1) return null
      var r = []
      for (var k = 0; k < n; k++) r.push(pts[(i + k) % n])
      var idx0inR = (n - i) % n
      if (idx0inR >= 1 && idx0inR <= jR) return null
      var out = [r[0], new OpenLayers.Geometry.Point(I.x, I.y)]
      for (k = jR + 1; k < n; k++) out.push(r[k])
      var startIdx = idx0inR === 0 ? 0 : idx0inR - jR + 1
      var m = out.length
      var final = []
      for (k = 0; k < m; k++) final.push(out[(startIdx + k) % m])
      return final
    }

    function tryRiverRingSpliceRepairs (pts, i, j, I) {
      var a = applyRiverRingSpliceAt(pts, i, j, I)
      if (a && a.length >= 4 && !riverRingSelfIntersects(a)) {
        pts.length = 0
        for (var k = 0; k < a.length; k++) pts.push(a[k])
        return true
      }
      var b = applyRiverRingSpliceAt(pts, j, i, I)
      if (b && b.length >= 4 && !riverRingSelfIntersects(b)) {
        pts.length = 0
        for (k = 0; k < b.length; k++) pts.push(b[k])
        return true
      }
      return false
    }

    /** Remove bow-tie / fold from offset polygon (in place). */
    function ensureRiverRingSimple (polyPoints) {
      if (!polyPoints || polyPoints.length < 4) return
      var repaired = false
      var maxIter = 48
      var iter = 0
      while (iter++ < maxIter && polyPoints.length > 4 && riverRingSelfIntersects(polyPoints)) {
        var cr = findRiverRingCrossingEdgePair(polyPoints)
        if (!cr) break
        var i = cr.i
        var j = cr.j
        var ia = (i + 1) % polyPoints.length
        var ja = (j + 1) % polyPoints.length
        var I = segmentProperIntersectionXY(polyPoints[i], polyPoints[ia], polyPoints[j], polyPoints[ja], 1e-10)
        if (!I) I = intersectionOnSegmentsClampedXY(polyPoints[i], polyPoints[ia], polyPoints[j], polyPoints[ja])
        if (I && tryRiverRingSpliceRepairs(polyPoints, i, j, I)) {
          repaired = true
          continue
        }
        var rem = (cr.i + 1) % polyPoints.length
        polyPoints.splice(rem, 1)
        repaired = true
      }
      if (riverRingSelfIntersects(polyPoints))
        console_log('[Street to River+] Self-intersecting ring could not be fully repaired (vertices=' + polyPoints.length + ')')
      else if (repaired)
        console_log('[Street to River+] Ring self-intersection repaired')
    }

    // 2014-01-09: Base on selected helper street creates or expand an existing river/railway
    function convertToLandmark (sel, lmtype, isUnlimitedSize) {
      var i
      var leftPa,
        rightPa,
        leftPb,
        rightPb
      var prevLeftEq,
        prevRightEq
      var street = getStreet(sel)

      var widthSpec = getRiverWidthRangeFromStreetAndPanel(street)
      var wStart = widthSpec.start
      var wEnd = widthSpec.end

      // create place with a minimum area 100m2
      // for simple segments only (A-B)
      if (sel.geometry.components.length === 2) {
        var minArea = 100
        var pt = []
        pt[0] = sel.geometry.components[0]
        pt[1] = sel.geometry.components[1]

        var seg = new OpenLayers.Geometry.LineString(pt)
        var segLength = seg.getGeodesicLength(W.map.getProjectionObject())
        var narrow = Math.min(wStart, wEnd)

        // if small area is expected
        if (minArea / narrow > segLength) {
          if (segLength <= Math.sqrt(minArea)) {
            // create a minimum square
            var line = Math.sqrt(minArea)
            var segScale = line / segLength
            var wSq = line / 1.18
            wStart = wSq
            wEnd = wSq
            pt[1].resize(segScale, pt[0], 1)
          } else {
            // scale both ends so the narrow side meets min width along the segment
            var needW = minArea / segLength
            var f = needW / narrow
            wStart *= f
            wEnd *= f
          }
        }
      }

      var streetVertices = sel.geometry.getVertices()
      var vertexWidths = vertexWidthsMeters(streetVertices, wStart, wEnd)
      var polyPoints = null
      var firstPolyPoint = null
      var secondPolyPoint = null

      var wazeActionUpdateFeatureGeometry = require('Waze/Action/UpdateFeatureGeometry')
      var wazefeatureVectorLandmark = require('Waze/Feature/Vector/Landmark')
      var wazeActionAddLandmark = require('Waze/Action/AddLandmark')
      var wazeActionDeleteObject = require('Waze/Action/DeleteObject')
      var wazeActionUpdateFeatureAddress = require('Waze/Action/UpdateFeatureAddress')

      console_log('Street vertices: ' + streetVertices.length)

      // 2013-10-13: Is new street inside an existing river?
      var bAddNew = !0
      var riverLandmark = null
      var repo = W.model.venues

      var rrr,
        donorLandmark = null
      for (var t in repo.objects) {
        riverLandmark = repo.objects[t]
        if (riverLandmark.attributes.categories[0] === lmtype) {
          console_log('riverLandmark.attributes.id=' + riverLandmark.attributes.id)
          console_log('streetVertices.length=' + streetVertices.length)
          console_log('streetVertices[0]=' + streetVertices[0])
          console_log('streetVertices[streetVertices.length - 1]=' + streetVertices[streetVertices.length - 1])

          // 2014-06-27: Verify if the landmark object has containsPoint function
          if ('function' === typeof riverLandmark.geometry.containsPoint) {
            if (riverLandmark.geometry.containsPoint(streetVertices[0])) {
              bAddNew = false // Street is inside an existing river
              console_log('rrr=' + riverLandmark.attributes.id)
              rrr = riverLandmark
              //             break;
            }
            if (riverLandmark.geometry.containsPoint(streetVertices[streetVertices.length - 1])) {
              //                        bAddNew = false;    // Street is inside an existing river
              console_log('donorLandmark=' + riverLandmark.attributes.id)
              donorLandmark = riverLandmark
              //             break;
            }

          }
        }
      }
      riverLandmark = rrr

      // 2013-10-13: Ignore vertices inside river
      var bIsOneVerticeStreet = false
      var firstStreetVerticeOutside = 0
      if (!bAddNew) {
        console_log('Expanding an existing river')
        while (firstStreetVerticeOutside < streetVertices.length) {
          if (!riverLandmark.geometry.containsPoint(streetVertices[firstStreetVerticeOutside]))
            break
          firstStreetVerticeOutside += 1
        }
        if (firstStreetVerticeOutside === streetVertices.length) {
          alert(getString(idAllSegmentsInside))
          return false
        }
        bIsOneVerticeStreet = firstStreetVerticeOutside === (streetVertices.length - 1)
        if (bIsOneVerticeStreet) {
          console_log('It\'s one vertice street')
        }
        if (firstStreetVerticeOutside > 1) {
          alert(getString(idMultipleSegmentsInside))
          return false
        }
        console_log('First street vertice outside river:' + firstStreetVerticeOutside)
      }

      // 2013-10-13: Add to polyPoints river polygon
      console_log('River polygon: Create')
      var first
      if (bAddNew)
        first = 0
      else
        first = firstStreetVerticeOutside - 1

      for (i = first; i < streetVertices.length - 1; i++) {
        var pa = streetVertices[i]
        var pb = streetVertices[i + 1]

        // fix for incorrect scale calculation, as distanceTo() returns units, but displacement is in meters
        // old:
        //var scale = (pa.distanceTo(pb) + displacement) / pa.distanceTo(pb);
        // new:
        //TODO optimize this, convert displacement into map units for easier scale calculation
        var points = [pa, pb]
        var ls = new OpenLayers.Geometry.LineString(points)
        var len = ls.getGeodesicLength(W.map.getProjectionObject())
        var wPa = vertexWidths[i]
        var wPb = vertexWidths[i + 1]
        var scalePa = (len + wPa / 2) / len
        var scalePb = (len + wPb / 2) / len

        leftPa = pa.clone()
        leftPa.resize(scalePa, pb, 1)
        rightPa = leftPa.clone()
        leftPa.rotate(90, pa)
        rightPa.rotate(-90, pa)

        leftPb = pb.clone()
        leftPb.resize(scalePb, pa, 1)
        rightPb = leftPb.clone()
        leftPb.rotate(-90, pb)
        rightPb.rotate(90, pb)

        var leftEq = getEquation({
          'x1': leftPa.x,
          'y1': leftPa.y,
          'x2': leftPb.x,
          'y2': leftPb.y
        })
        var rightEq = getEquation({
          'x1': rightPa.x,
          'y1': rightPa.y,
          'x2': rightPb.x,
          'y2': rightPb.y
        })
        if (polyPoints === null) {
          polyPoints = [leftPa, rightPa]
        } else {
          var li = intersectX(leftEq, prevLeftEq)
          var ri = intersectX(rightEq, prevRightEq)
          if (li && ri) {
            // 2013-10-17: Is point outside river?
            if (i >= firstStreetVerticeOutside) {
              polyPoints.unshift(li)
              polyPoints.push(ri)

              // 2013-10-17: Is first point outside river? -> Save it for later use
              if (i == firstStreetVerticeOutside) {
                firstPolyPoint = li.clone()
                secondPolyPoint = ri.clone()
                polyPoints = [li, ri]
              }
            }
          } else {
            // 2013-10-17: Is point outside river?
            if (i >= firstStreetVerticeOutside) {
              polyPoints.unshift(leftPb.clone())
              polyPoints.push(rightPb.clone())

              // 2013-10-17: Is first point outside river? -> Save it for later use
              if (i == firstStreetVerticeOutside) {
                firstPolyPoint = leftPb.clone()
                secondPolyPoint = rightPb.clone()
                polyPoints = [leftPb, rightPb]
              }
            }
          }
        }

        prevLeftEq = leftEq
        prevRightEq = rightEq

        // 2013-06-03: Is Waze limit reached?
        if ((polyPoints.length > 50) && !isUnlimitedSize) {
          break
        }
      }

      if (bIsOneVerticeStreet) {
        firstPolyPoint = leftPb.clone()
        secondPolyPoint = rightPb.clone()
        polyPoints = [leftPb, rightPb]
        console_log('One vertice river:' + polyPoints.length)
      } else {
        polyPoints.push(rightPb)
        polyPoints.push(leftPb)
      }
      console_log('River polygon: done')

      if (bAddNew)
        ensureRiverRingSimple(polyPoints)

      // 2014-01-09: Create or expand an existing river?
      if (bAddNew) {
        // 2014-01-09: Add new river
        // 2014-01-09: Create new river's Polygon
        var polygon = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(polyPoints))

        // 2014-10-08: Creates river's Landmark

        //FIX (?????? Start)
        //                riverLandmark = new wazefeatureVectorLandmark();
        var ldk = {}
        ldk.geoJSONGeometry = W.userscripts.toGeoJSONGeometry(polygon)
        riverLandmark = new wazefeatureVectorLandmark(ldk)
        //FIX (?????? End)

        riverLandmark.geometry = polygon
        riverLandmark.attributes.categories.push(lmtype)

        // 2014-01-09: Add river's name base on Street Name
        if (street && street.attributes.name) {
          riverLandmark.attributes.name = stripRiverWidthPrefixFromStreetName(street.attributes.name)
        }

        // 2014-10-08: Add new Landmark to Waze Editor
        var riverLandmark_o = new wazeActionAddLandmark(riverLandmark)
        W.model.actionManager.add(riverLandmark_o)
        try {
          W.selectionManager.setSelectedModels([riverLandmark])
        } catch (err) {
          // Ignore error:
          // Uncaught TypeError: Cannot read properties of undefined (reading 'children')
          // at Object.WMETB_FPnewSelectionAvailable (FancyPermalink.min.js:216:184)
          // at v (third_party-45fe9aba9d649e1fe91a.js.gz:2:1169484)
          console_log(err)
        }

        if (lmtype !== 'OTHER') {
          console_log('bAddNew')
          let address = riverLandmark.getAddress().attributes
          console_log(address)
          let newAddressAtts = {
            streetName: null,
            emptyStreet: true,
            cityName: null,
            emptyCity: true,
            stateID: address.state.attributes.id,
            countryID: address.country.attributes.id
          }
          W.model.actionManager.add(new wazeActionUpdateFeatureAddress(riverLandmark, newAddressAtts, {
            streetIDField: 'streetID'
          }))
        }

      } else {
        // 2014-01-09: Expand an existing river
        var originalGeometry = riverLandmark.geometry.clone()

        if (donorLandmark) // если есть донор
        {
          let undoGeometry = riverLandmark.geometry.clone()
          var undoGeometryDonor = donorLandmark.geometry.clone()
          var components = riverLandmark.geometry.components[0].components
          var componentsDonor = donorLandmark.geometry.components[0].components

          //window.donorLandmark=donorLandmark;
          //window.riverLandmark=riverLandmark;

          // куда закручен массив?
          var componentsRL = CalcRL(components)
          var componentsDonorRL = CalcRL(componentsDonor)
          console_log('src=' + componentsRL + ', donor=' + componentsDonorRL)
          // найти индекс ближайшей точки к началу сегмента
          var dist = 1000000000
          var p1 = [0, 0],
            p2 = [0, 0] // индексы ближайших точек
          for (let i1 = 0; i1 < components.length; i1++) {
            var d1 = Math.sqrt(Math.pow(Math.abs(components[i1].x - streetVertices[0].x), 2) + Math.pow(Math.abs(components[i1].y - streetVertices[0].y), 2))
            if (d1 < dist) {
              dist = d1
              p1[0] = i1
              if (componentsRL > 0)
                p1[1] = i1 === 0 ? components.length - 1 : i1 - 1
              else
                p1[1] = i1 == components.length - 1 ? 0 : i1 + 1
            }
          }

          console_log('p1=' + p1 + ', dist=' + dist)
          // ищем индекс во втором ПОИ, откуда начинать вставку.
          dist = 1000000000
          for (let i1 = 0; i1 < componentsDonor.length; i1++) {
            let d1 = Math.sqrt(Math.pow(Math.abs(componentsDonor[i1].x - streetVertices[streetVertices.length - 1].x), 2) + Math.pow(Math.abs(componentsDonor[i1].y - streetVertices[streetVertices.length - 1].y), 2))
            if (d1 < dist) {
              dist = d1
              p2[0] = i1
              if (componentsDonorRL > 0)
                p2[1] = i1 === 0 ? componentsDonor.length - 1 : i1 - 1
              else
                p2[1] = i1 == componentsDonor.length - 1 ? 0 : i1 + 1
            }
          }
          console_log('p2=' + p2 + ', dist=' + dist)

          var componentsNew = components.slice()
          componentsNew.length = 0

          // добавляем источник
          for (let i1 = 0; i1 <= p1[0]; ++i1)
            componentsNew.push(components[i1])

          // добавляем донора
          if (componentsRL < 0) {
            if (componentsDonorRL < 0) {
              // добавляем донора по кругу
              for (let i1 = p2[0]; i1 < componentsDonor.length; ++i1)
                componentsNew.push(componentsDonor[i1])

              // ...остаток донора
              for (let i1 = 0; i1 < p2[0]; ++i1)
                componentsNew.push(componentsDonor[i1])
            } else {
              // добавляем донора по кругу
              for (let i1 = p2[0]; i1 >= 0; --i1)
                componentsNew.push(componentsDonor[i1])

              // ...остаток донора
              for (let i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
                componentsNew.push(componentsDonor[i1])
            }
          } else {
            if (componentsDonorRL < 0) {
              // добавляем донора по кругу
              for (let i1 = p2[0]; i1 >= 0; --i1)
                componentsNew.push(componentsDonor[i1])

              // ...остаток донора
              for (let i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
                componentsNew.push(componentsDonor[i1])
            } else {
              // добавляем донора по кругу
              for (let i1 = p2[0]; i1 < componentsDonor.length; ++i1)
                componentsNew.push(componentsDonor[i1])

              // ...остаток донора
              for (let i1 = 0; i1 < p2[0]; ++i1)
                componentsNew.push(componentsDonor[i1])
            }
          }

          // добавляем источник
          for (let i1 = p1[0] + 1; i1 < components.length; ++i1)
            componentsNew.push(components[i1])

          //window.componentsNew=componentsNew
          // обновляемся
          riverLandmark.geometry.components[0].components = uniq(componentsNew)

          W.model.actionManager.add(new wazeActionUpdateFeatureGeometry(riverLandmark, W.model.venues, W.userscripts.toGeoJSONGeometry(undoGeometry), W.userscripts.toGeoJSONGeometry(riverLandmark.geometry)))
          W.model.actionManager.add(new wazeActionDeleteObject(donorLandmark, W.model.venues, W.userscripts.toGeoJSONGeometry(undoGeometryDonor), W.userscripts.toGeoJSONGeometry(donorLandmark.geometry)))

          return true
        }
        var riverVertices = riverLandmark.geometry.getVertices()
        console_log('Total river vertices:' + riverVertices.length)

        // 2013-06-01: Adjust first street vertice in case of a 2 vertice river
        if (firstStreetVerticeOutside === 0)
          firstStreetVerticeOutside = 1

        // 2013-06-01: Find on selected river, the nearest point from the beginning of road

        var distance = 0
        var minDistance = 100000
        var indexNearestPolyPoint = 0
        for (i = 0; i < polyPoints.length; i++) {
          distance = polyPoints[i].distanceTo(streetVertices[firstStreetVerticeOutside])
          if (distance < minDistance) {
            minDistance = distance
            indexNearestPolyPoint = i
          }
        }
        console_log('polyPoints.length: ' + polyPoints.length)
        console_log('indexNearestPolyPoint: ' + indexNearestPolyPoint)

        var indexNearestRiverVertice = 0
        var nextIndex
        minDistance = 100000
        for (i = 0; i < riverVertices.length; i++) {
          nextIndex = getNextIndex(i, riverVertices.length, +1)
          if (isIntersectingLines(riverVertices[i], riverVertices[nextIndex], streetVertices[0], streetVertices[1])) {
            distance = polyPoints[indexNearestPolyPoint].distanceTo(riverVertices[i])
            if (distance < minDistance) {
              minDistance = distance
              indexNearestRiverVertice = i
            }
          }
        }
        console_log('indexNearestRiverVertice: ' + indexNearestRiverVertice)
        var nextRiverVertice = getNextIndex(indexNearestRiverVertice, riverVertices.length, 1)

        // 2013-06-01: Is river's Polygon clockwise or counter-clockwise?

        console_log('nextRiverVertice: ' + nextRiverVertice)

        console_log('firstPolyPoint:' + firstPolyPoint)
        console_log('secondPolyPoint:' + secondPolyPoint)

        var inc = 1
        var incIndex = 0
        if (isIntersectingLines(riverVertices[indexNearestRiverVertice], firstPolyPoint, riverVertices[nextRiverVertice], secondPolyPoint)) {
          //inc = -1;
          console_log('Lines intersect: clockwise polygon')
          inc = +1
          incIndex = 1
        } else {
          inc = +1
          console_log('Lines doesn\'t intersect: counter-clockwise polygon')
        }

        // 2013-06-03: Update river's polygon (add new vertices)
        //var indexLastPolyPoint = getNextIndex(index, polyPoints.length, -inc);
        var indexNextVertice = 1
        var index = polyPoints.length / 2 - 1

        if (bIsOneVerticeStreet)
          index += 1

        for (i = 0; i < polyPoints.length; i++) {
          if (!originalGeometry.containsPoint(polyPoints[index])) {

            // 2014-01-09: Save's old Landmark
            let undoGeometry = riverLandmark.geometry.clone()

            // 2014-01-09: Add a new point to existing river landmark
            riverLandmark.geometry.components[0].addComponent(polyPoints[index], indexNearestRiverVertice + indexNextVertice)

            // 2014-01-09: Update river landmark on Waze editor
            // 2014-09-30: Gets UptdateFeatureGeometry
            W.model.actionManager.add(new wazeActionUpdateFeatureGeometry(riverLandmark, W.model.venues, W.userscripts.toGeoJSONGeometry(undoGeometry), W.userscripts.toGeoJSONGeometry(riverLandmark.geometry)))
            //delete undoGeometry;

            console_log('Added: ' + index)
            indexNextVertice += incIndex
          }
          index = getNextIndex(index, polyPoints.length, inc)
        }

        // 2013-06-03: Notify Waze that current river's geometry change.
        //Waze.model.actionManager.add(new Waze.Action.UpdateFeatureGeometry(riverLandmark,Waze.model.landmarks,originalGeometry,riverLandmark.geometry));
        //delete originalGeometry;

        if (lmtype !== 'OTHER') {
          console_log('!bAddNew')
          let address = riverLandmark.getAddress().attributes
          console_log(address)
          let newAddressAtts = {
            streetName: null,
            emptyStreet: true,
            cityName: null,
            emptyCity: true,
            stateID: address.state.attributes.id,
            countryID: address.country.attributes.id
          }
          W.model.actionManager.add(new wazeActionUpdateFeatureAddress(riverLandmark, newAddressAtts, {
            streetIDField: 'streetID'
          }))
        }

      }
      return true
    }

    // 2013-06-02: Returns TRUE if line1 intersects lines2
    function isIntersectingLines (pointLine1From, pointLine1To, pointLine2From, pointLine2To) {
      var segment1
      var segment2

      // 2013-06-02: OpenLayers.Geometry.segmentsIntersect requires that start and end are ordered so that x1 < x2.
      if (pointLine1From.x <= pointLine1To.x)
        segment1 = {
          'x1': pointLine1From.x,
          'y1': pointLine1From.y,
          'x2': pointLine1To.x,
          'y2': pointLine1To.y
        }
      else
        segment1 = {
          'x1': pointLine1To.x,
          'y1': pointLine1To.y,
          'x2': pointLine1From.x,
          'y2': pointLine1From.y
        }

      if (pointLine2From.x <= pointLine2To.x)
        segment2 = {
          'x1': pointLine2From.x,
          'y1': pointLine2From.y,
          'x2': pointLine2To.x,
          'y2': pointLine2To.y
        }
      else
        segment2 = {
          'x1': pointLine2To.x,
          'y1': pointLine2To.y,
          'x2': pointLine2From.x,
          'y2': pointLine2From.y
        }

      return OpenLayers.Geometry.segmentsIntersect(segment1, segment2, !1)
    }

    // 2013-06-02: Returns TRUE if polygon's direction is clockwise. FALSE -> counter-clockwise
    // Based on: http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order
    /*
    function isClockwise(vertices,index,count){
    var total=0;
    var nextIndex;

    if(count > vertices.length)
    count = vertices.length;


    for(var i=0; i < vertices.length-1; i++){
    nextIndex = getNextIndex(index,vertices.length,+1);
    total += (vertices[nextIndex].x-vertices[index].x) * (vertices[nextIndex].y+vertices[index].y);
    index = nextIndex;
    }
    return total>=0;
    }
     */

    // 2013-06-01: Increment/decrement index by 1
    function getNextIndex (index, length, inc) {
      var next = index + inc
      if (next == length)
        next = 0
      if (next < 0)
        next = length - 1
      return next
    }

    function getEquation (segment) {
      if (segment.x2 == segment.x1)
        return {
          'x': segment.x1
        }

      var slope = (segment.y2 - segment.y1) / (segment.x2 - segment.x1)
      var offset = segment.y1 - (slope * segment.x1)
      return {
        'slope': slope,
        'offset': offset
      }
    }

    //
    // line A: y = ax + b
    // line B: y = cx + b
    //
    // x = (d - b) / (a - c)
    function intersectX (eqa, eqb) {
      if ('number' == typeof eqa.slope && 'number' == typeof eqb.slope) {
        if (eqa.slope == eqb.slope)
          return null

        var ix = (eqb.offset - eqa.offset) / (eqa.slope - eqb.slope)
        var iy = eqa.slope * ix + eqa.offset
        return new OpenLayers.Geometry.Point(ix, iy)
      } else if ('number' == typeof eqa.x) {
        return new OpenLayers.Geometry.Point(eqa.x, eqb.slope * eqa.x + eqb.offset)
      } else if ('number' == typeof eqb.y) {
        return new OpenLayers.Geometry.Point(eqb.x, eqa.slope * eqb.x + eqa.offset)
      }
      return null
    }

    function getStreet (segment) {
      if (!segment.attributes.primaryStreetID)
        return null
      var street = segment.model.streets.getObjectById(segment.attributes.primaryStreetID)
      return street
    }

    // 2013-06-09: Save current river width (end of taper; panel)
    function setLastRiverWidthEnd (riverWidth) {
      if (typeof Storage !== 'undefined')
        sessionStorage.riverWidthEnd = Number(riverWidth)
      else
        console_log('No web storage support')
    }

    function getLastRiverWidthEnd (defaultRiverWidth) {
      if (typeof Storage !== 'undefined' && sessionStorage.riverWidthEnd != null && sessionStorage.riverWidthEnd !== '')
        return Number(sessionStorage.riverWidthEnd)
      return getLastRiverWidth(defaultRiverWidth)
    }

    function setLastRiverWidthUniform (uniform) {
      if (typeof Storage !== 'undefined')
        sessionStorage.riverWidthUniform = uniform ? '1' : '0'
      else
        console_log('No web storage support')
    }

    function getLastRiverWidthUniform (defaultUniform) {
      if (typeof Storage !== 'undefined' && sessionStorage.riverWidthUniform != null && sessionStorage.riverWidthUniform !== '')
        return sessionStorage.riverWidthUniform === '1' || Number(sessionStorage.riverWidthUniform) === 1
      return defaultUniform !== false
    }

    // 2013-06-09: Save current river Width
    function setLastRiverWidth (riverWidth) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and sessionStorage support!
        sessionStorage.riverWidth = Number(riverWidth)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-06-09: Returns last saved river width
    function getLastRiverWidth (defaultRiverWidth) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and sessionStorage support!
        if (sessionStorage.riverWidth)
          return Number(sessionStorage.riverWidth)
        else
          return Number(defaultRiverWidth) // Default river width
      } else {
        // Sorry! No web storage support..
        return Number(defaultRiverWidth) // Default river width
      }
    }

    // 2013-10-20: Save current unlimited size preference
    function setLastIsUnlimitedSize (isUnlimitedSize) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and sessionStorage support!
        sessionStorage.isUnlimitedSize = Number(isUnlimitedSize)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-10-20: Returns last saved unlimited size preference
    function getLastIsUnlimitedSize (defaultValue) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-10-20: Yes! localStorage and sessionStorage support!
        if (sessionStorage.isUnlimitedSize)
          return Number(sessionStorage.isUnlimitedSize)
        else
          return Number(defaultValue) // Default preference
      } else {
        // Sorry! No web storage support..
        return Number(defaultValue) // Default preference
      }
    }

    // 2013-10-20: Save current unlimited size preference
    function setLastIsDeleteSegment (isDeleteSegment) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and sessionStorage support!
        sessionStorage.isDeleteSegment = Number(isDeleteSegment)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-10-20: Returns last saved unlimited size preference
    function getLastIsDeleteSegment (defaultValue) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-10-20: Yes! localStorage and sessionStorage support!
        if (sessionStorage.isDeleteSegment)
          return Number(sessionStorage.isDeleteSegment)
        else
          return Number(defaultValue) // Default preference
      } else {
        // Sorry! No web storage support..
        return Number(defaultValue) // Default preference
      }
    }

    // 2014-06-05: Returns WME interface language
    function getLanguage () {
      var wmeLanguage
      var urlParts

      urlParts = location.pathname.split('/')
      wmeLanguage = urlParts[1].toLowerCase()
      if (wmeLanguage === 'editor')
        wmeLanguage = 'us'

      return wmeLanguage

    }

    // 2014-06-05: Returns WME interface language
    /*
    function isBetaEditor(){
    var wmeEditor = location.host.toLowerCase();

    return wmeEditor==="editor-beta.waze.com";
    }
     */

    // 2014-06-05: Translate text to different languages
    function intLanguageStrings () {
      switch (getLanguage()) {
        case 'es': // 2014-06-05: Spanish
        case 'es-419':
          langText = ['', 'Ancho (metros)', 'Cree una nueva calle, selecciónela y oprima este botón.', 'Calle a Río', 'Tamaño ilimitado',
            '¡No se encontró una calle sin guardar!', 'Todos los segmentos de la calle adentro del río. No se puede continuar.',
            'Múltiples segmentos de la calle dentro del río. No se puede continuar', 'Other', 'Forest', 'Delete segment', 'Canal', 'Ancho final (m)',
            'Mismo ancho en todo el tramo']
          break
        case 'fr': // 2014-06-05: French
          langText = ['', 'Largura (mètres)', 'Crie uma nova rua, a selecione e clique neste botão.', 'Rue á rivière', 'Taille illimitée (dangereux)',
            'Pas de nouvelle rue non enregistré trouvée!', 'Tous les segments de la rue dans la rivière. Vous ne pouvez pas continuer.',
            'Plusieurs segments de rues à l\'intérieur de la rivière. Vous ne pouvez pas continuer.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Largeur fin (m)',
            'Même largeur sur toute la longueur']
          break
        case 'ru': // 2014-06-05: Russian
          langText = ['', 'Ширина (в метрах)', 'Создайте новую дорогу (не сохраняйте), выберите ее и нажмите эту кнопку.', 'Река', 'Вся длина',
            'Не выделено ни одной не сохраненной дороги!', 'Все сегменты дороги находятся внутри реки. Преобразование невозможно.',
            'Слишком много сегментов дороги находится внутри реки. Преобразование невозможно.', 'Контур', 'Лес', 'Удалить сегмент', 'Канал', 'Ширина в конце (м)',
            'Одна ширина на всю длину']
          break
        case 'uk': // 2018-05-03: Ukrainian
          langText = ['', 'Ширина (в метрах)', 'Створіть нову дорогу (не зберігайте і не знімайте виділення) та натисніть цю кнопку.', 'Ріка', 'Безлімітна довжина (небезпечно)',
            'Не виділено жодної збереженої дороги!', 'Усі сегменти дороги знаходяться всередині ріки. Перетворення неможливе.',
            'Занадто багато сегментів дороги знаходяться всередині ріки. Перетворення неможливе.', 'Контур', 'Ліс', 'Видалити сегмент', 'Канал', 'Ширина в кінці (м)',
            'Та сама ширина на всю довжину']
          break
        case 'hu': // 2014-07-02: Hungarian
          langText = ['', 'Szélesség (méter)', 'Hozzon létre egy új utcát, válassza ki, majd kattintson erre a gombra.', 'Utcából folyó', 'Korlátlan méretű (nem biztonságos)',
            'Nem található nem mentett és kiválasztott új utca!', 'Az útszakasz a folyón belül található! Nem lehet folytatni.',
            'Minden útszakasz a folyón belül található! Nem lehet folytatni.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Szélesség vége (m)',
            'Azonos szélesség a teljes hosszon']
          break
        case 'cs': // 2014-07-03: Czech
          langText = ['', 'Šířka (metrů)', 'Vytvořte osu řeky, vyberte segment a stiskněte toto tlačítko.', 'Silnice na řeku', 'Neomezená šířka (nebezpečné)',
            'Nebyly vybrány žádné neuložené segmenty!', 'Všechny segmenty jsou uvnitř řeky! Nelze pokračovat.',
            'Uvnitř řeky je více segmentů! Nelze pokračovat.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Šířka na konci (m)',
            'Stejná šířka po celé délce']
          break
        case 'pl': // 2014-11-08: Polish - By Zniwek
          langText = ['', 'Szerokość (w metrach)', 'Stwórz ulicę, wybierz ją i kliknij ten przycisk.', 'Ulica w Rzekę', 'Nieskończony rozmiar (niebezpieczne)',
            'Nie znaleziono nowej i niezapisanej ulicy!', 'Wszystkie segmenty ulicy wewnątrz rzeki. Nie mogę kontynuować.',
            'Wiele segmentów ulicy wewnątrz rzeki. Nie mogę kontynuować.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Szerokość na końcu (m)',
            'Ta sama szerokość na całej długości']
          break
        case 'pt-br': // 2015-04-05: Portuguese - By esmota
          langText = ['', 'Largura (metros)', 'Criar uma nova rua, selecione e clique neste botão.', 'Rua para Rio', 'Comprimento ilimitado (instável)',
            'Nenhuma nova rua, sem salvar, selecionada!', 'Todos os segmentos de rua estão dentro de um rio. Nada a fazer.',
            'Múltiplos segmentos de rua dentro de um rio. Impossível continuar.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Largura final (m)',
            'Mesma largura em todo o trecho']
          break
        default: // 2014-06-05: English
          langText = ['', 'Width (in meters)', 'Create a new street, select and click this button.', 'River', 'Unlimited size (unsafe)',
            'No unsaved and selected new street found!', 'All street segments inside river. Cannot continue.',
            'Multiple street segments inside river. Cannot continue.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Width end (m)',
            'Same width entire length']
      }
    }

    // 2014-06-05: Returns the translated  string to current language, if the language is not recognized assumes English
    function getString (stringID) {
      return langText[stringID]
    }

    function console_log (msg) {
      //if (console.log)
      // 2013-05-19: Alternate method to validate console object
      if (typeof console != 'undefined')
        console.log(msg)
    }

    // 2014-06-05: Get interface language
    scriptLanguage = getLanguage()
    intLanguageStrings()

    //W.selectionManager.events.register(
    //  'selectionchanged',
    //  null,
    //  insertButtons
    //)
    $(document)
      .on('segment.wme', (event, element, model) => {
        insertButtons()
      })
  }

  streetToRiver_bootstrap()

  // from: https://greasyfork.org/ru/scripts/16071-wme-keyboard-shortcuts (modify)
  /*
  when adding shortcuts each shortcut will need a unique name
  the command to add links is WMERegisterKeyboardShortcut(ScriptName, ShortcutsHeader, NewShortcut, ShortcutDescription, FunctionToCall, ShortcutKeysObj) {
  ScriptName: This is the name of your script used to track all of your shortcuts on load and save.
  ScriptName: replace 'WMEAwesome' with your scripts name such as 'SomeOtherScript'
  ShortcutsHeader: this is the header that will show up in the keyboard editor
  NewShortcut: This is the name of the shortcut and needs to be unique from all of the other shortcuts, from other scripts, and WME
  ShortcutDescription: This will show up as the text next to your shortcut
  FunctionToCall: this is the name of your function that will be called when the keyboard shortcut is presses
  ShortcutKeysObj: the is the object representing the keys watched set this to '-1' to let the users specify their own shortcuts.
  ShortcutKeysObj: The alt, shift, and ctrl keys are A=alt, S=shift, C=ctrl. for short cut to use "alt shift ctrl and l" the object would be 'ASC+l'
   */
  function WMEKSRegisterKeyboardShortcut (a, b, c, d, e, f, g) {
    try {
      I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members.length
    } catch (c) {
      W.accelerators.Groups[a] = [],
        W.accelerators.Groups[a].members = [],
        I18n.translations[I18n.locale].keyboard_shortcuts.groups[a] = [],
        I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].description = b,
        I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members = []
    }
    if (e && 'function' == typeof e) {
      I18n.translations[I18n.locale].keyboard_shortcuts.groups[a].members[c] = d,
        W.accelerators.addAction(c, {
          group: a
        })
      var i = '-1',
        j = {}
      j[i] = c,
        W.accelerators._registerShortcuts(j),
      null !== f && (j = {}, j[f] = c, W.accelerators._registerShortcuts(j)),
        W.accelerators.events.register(c, null, function () {
          e(g)
        })
    } else
      alert('The function ' + e + ' has not been declared')
  }

  function WMEKSLoadKeyboardShortcuts (a) {
    if (console.log('WMEKSLoadKeyboardShortcuts(' + a + ')'), localStorage[a + 'KBS'])
      for (var b = JSON.parse(localStorage[a + 'KBS']), c = 0; c < b.length; c++)
        try {
          W.accelerators._registerShortcuts(b[c])
        } catch (a) {
          console.log(a)
        }
  }

  function WMEKSSaveKeyboardShortcuts (a) {
    console.log('WMEKSSaveKeyboardShortcuts(' + a + ')')
    var b = []
    for (var c in W.accelerators.Actions) {
      var d = ''
      if (W.accelerators.Actions[c].group == a) {
        W.accelerators.Actions[c].shortcut ? (W.accelerators.Actions[c].shortcut.altKey === !0 && (d += 'A'), W.accelerators.Actions[c].shortcut.shiftKey === !0 && (d += 'S'), W.accelerators.Actions[c].shortcut.ctrlKey === !0 && (d += 'C'), '' !== d && (d += '+'), W.accelerators.Actions[c].shortcut.keyCode && (d += W.accelerators.Actions[c].shortcut.keyCode)) : d = '-1'
        var e = {}
        e[d] = W.accelerators.Actions[c].id,
          b[b.length] = e
      }
    }
    localStorage[a + 'KBS'] = JSON.stringify(b)
  }

  /* ********************************************************** */
})()
