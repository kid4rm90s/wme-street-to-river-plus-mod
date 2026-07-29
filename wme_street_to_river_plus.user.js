// ==UserScript==
// @name            WME Street to River PLUS (mod)
// @description     Converts an unsaved WME street segment into a river/forest/canal/other area polygon landmark.
// @namespace       https://greasyfork.org/users/160654-waze-ukraine
// @grant           none
// @version         2026.07.30.001
// @match           https://beta.waze.com/*editor*
// @match           https://www.waze.com/*editor*
// @exclude         https://www.waze.com/*user/*editor/*
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAc9SURBVHja7J3NSxxJFMDnmD8gVxECg3PwZEBIDsIu8RI9RQhD7oGF3M0HODiHmBxkYRIvwbASsgZnmxBh1I4OiiLGQMIgmw1mD6tLxDGZkCBh4y4TofYyNamU3dNV3fXxXtsN7yaM0795n/XeqxQhJOUnv87NgZLU1cntTN4hqqQ9V1wx/R1avW9CSCqFBUgm77gNIQrFTV2d3E6AhNMMN5N3SLZcUyIDMztWtCQWQCiMdG6KXHy6p0TSuSlCtS4BIiFtQ8XVTN5x07kpki3XlAGhJivxISH9hioQDAxi2n+gBnK79CLL+g1VMKjvyOQdd3P344kEiIB0jkyXKIyBmR0d2uGOLWz02/huKIFQGD3j60phsNph67uhA8I6cZUwIGgHOiA031AdUbFhrg1HjhaILr9x7kHFuqlCB4SGuJ0j00phZMu1b2WSQbvagQaITlPVM75uJSNHC6Q9V1zRkfxdfLpHzhc3wZgqNEAojO7ConIgtupVKIG83Hp3kr6scw8qymFAyDlQAWmYKqLDVEEKc9EA0VGngq4dYIFQU6W6NMJrx7Xf1n5KgEiEuDpg2DzrQAdkbGGjX1eIy2flbUPF1QSIoCPvGnU9X2ZvaTeyT6Hm6tK9hZsJEIEE0A9GofKJ0Of+q/3IZRKIMMAA4btG+Bd5ZblG2KdQ+RQpuoJqrsAAadU10lvaJfwTtVQCLfcABSQoqmKfg/ohueDuJUB0ASlV/upsFVXx2tE3W1US8iYmK8BUnS9uHnlxF9zvteP32n+xLSiCALK5+/GEjHb0lnZjdzoICgjNOXofbni+uK39ehPG8+qBtrL77dKL7LEHcvrWk8dB5RH2ieLIA6BY7zIBAUSkkqvDXPHSOTLdhJLJO257rriy9PrtqWMFJMh3mATCleKbcNqGiqu2KsHGgTQa3YgMEBXhblBJ5czYMmvGmlqTGpzcNulnjAMRPXh6Xj3Q7kf84AzM7HjCafi9cttQcfXRszdn0QOhHesiZx182Ks60hKF0zO+TtK5KR4QoT5HNRyjQOhQpl+oG1RUNA3EC1C2XCPdhUVPDUrnpspRfY9RINR/yLwESEC8AoKuUfcInCjRmlEgOhsXoABi85tM3nF/Wf7jxwSIZbPGdERKtxoZBdIx7MzHHYhfNUB0vNooEFq/Oi5AODPmZvKO239n7i5qpx4XM8ZqCxggtKioesYDi3SNuk1NOX3ryWNUmXrMofhqinEgIqV3bEITWNFumFaO3mr5PQ4w+KPm8t//BNbdGJ9yJCS2AkTniJptIKJVBbYD/+XWu5NQjnDdTN4hOgZyTMv7L1+PQAnSFBp5sabLatcJXQIQF5+SLdekNMVrxhFS52JzGxxmM9Y3W5XSFAqEhsFgmq2Z/l70voU/y2kVfVEtoc17YAd2VG+IMy3X1z4I9QWwERfYkbZL9xZuYjdhfPTVaoSCmq3LE0s3wA590gQSswm7/2pfyME3tkmQ1ODkNpbFASjLLbwvEWkCR7HrRNfiGdNmKzZA2NK938gbZiB01K5j2JlHA4Su2sAUefE5icjsI8oFZiK+xHSDnQoNac8VV1ABET0CZn+ZYSd2VYjz5+fm//H533oChBBC3n/5ag2IaB6C0qmHNVm2zBbfddmqYbz34UZzGBUlENlfp+7ueS85qB82P39rv97yb7sLi6QR1pfQAFl6/faUTJRlEwjvzIM+H3wtq1WjtmgeYtNksWtAgrr2aXGxY9iZRwOEHWMQ8R8yGbJuZx70Y+CXGaAAQrP0M2PL0gmZqvn2MDBEfgx0zhHcAZWfXJ5YuiFbXGQjnOtrH6wBCfId7FkIHV9AsyZWtLDImyvT/oP+GEQ+F+yZusCZiLB2yJS8bYvX9XxggTRGF6TPQfimNQRAvuvzBb8mVmYzKW+udM63q7wEAPya2LCXtrDNaqadedgtEiBaSUW7TqJkxzbL7jLawbaRggRCYYiOTvv110LWDtrU4LVIDRSQsPcSyvbUQnHmXtfygVsTK9vygynMFVlVC663N0qbzUH9EMtkruu39xHMVtIwl33xD+QwV/RWBqtAwpopr21BNg6hwmpHq3VP1oCw16fKwmDPGzBohsyac6s7F8M0vmELcfmR6KCdwcaB/PBzaSLs0CfvxE2fdZi4Dc4okP47c3dly+mY8w3+zAMUEGaeUDqa8jJTGPwGv4AGzPIZfoZQFgbbUoMJBpuVi65o0g6EDW1VzIBjMFO8doDZlxW2ckthsOvGCSHkyjKegR3WkXvVrIwDSQ1+gxHm2lQeBpbwVrREYhRI0BVGsqYq7BVHGMJc7UDYaMrrXhDZvipsMNgwl3YjWgHy6NmbsyrXZPTNVlFFU1FNlVIg7Fx5HDb86K5XaQUSl80LKmH4re/TDoSNpI7rHkW+6S3qhWORgNA9vD3j68296MdV/LpIzGoIY64SkdtgrdWHdAw7hBVTL4H/XC8x9b+ouqwyCMj/AwCMXYIhsNBg6AAAAABJRU5ErkJggg==
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
//    Optional "Attach at crossing": first segment crosses same-category POI — extend that POI (keeps existing outline). If end lies in the same POI, it is not treated as a separate donor (avoids merge-delete).
// 4) Select the helper street
// 5) Click the "Street to river" button
// 4) Delete the helper street
// 5) Edit the new landmark as you like
//
// Updated by: Eduardo Carvajal

/* jshint esversion: 11 */
/* global W */
/* global I18n */
/* global getWmeSdk */
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
  const idAttachCrossing = 14
  const idEndCapRound = 15

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
    var _sdkShortcutDefs

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

      var chkAttachCrossing = $('<wz-checkbox name="_riverAttachCrossing">' + getString(idAttachCrossing) + '</wz-checkbox>')
      chkAttachCrossing.prop('checked', getLastAttachCrossing(false))
      chkAttachCrossing.change(function () {
        setLastAttachCrossing(this.checked)
      })

      var chkEndCapRound = $('<wz-checkbox name="_riverEndCapRound">' + getString(idEndCapRound) + '</wz-checkbox>')
      chkEndCapRound.prop('checked', getLastEndCapRound(true))
      chkEndCapRound.change(function () {
        setLastEndCapRound(this.checked)
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
      divGroup2.append(chkAttachCrossing)
      divGroup2.append(chkEndCapRound)

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
            var SsDel = getSegmentSdk()
            if (SsDel && sel.attributes && sel.attributes.id != null) {
              try {
                SsDel.deleteSegment({ segmentId: Number(sel.attributes.id) })
              } catch (eDel) {
                console_log('Street to River+: Segments.deleteSegment: ' + eDel)
              }
            } else {
              console_log('Street to River+: helper delete needs SDK.DataModel.Segments.deleteSegment')
            }
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
      // If still self-intersecting (e.g. hit maxIter), keep removing one vertex per crossing until simple or minimal ring.
      var guard = 0
      while (polyPoints.length > 4 && riverRingSelfIntersects(polyPoints) && guard++ < 96) {
        var cr2 = findRiverRingCrossingEdgePair(polyPoints)
        if (!cr2) break
        polyPoints.splice((cr2.i + 1) % polyPoints.length, 1)
        repaired = true
      }
      if (riverRingSelfIntersects(polyPoints))
        console_log('[Street to River+] Self-intersecting ring could not be fully repaired (vertices=' + polyPoints.length + ')')
      else if (repaired)
        console_log('[Street to River+] Ring self-intersection repaired')
    }

    function segmentUnitXY (fromPt, toPt) {
      var dx = toPt.x - fromPt.x
      var dy = toPt.y - fromPt.y
      var len = Math.sqrt(dx * dx + dy * dy)
      if (len < 1e-12) return { ux: 1, uy: 0, len: 0 }
      return { ux: dx / len, uy: dy / len, len: len }
    }

    /** Edge of the strip whose midpoint lies nearest to capVertex; widthApprox tunes length penalty (map units). */
    function findRiverCapEdgeNearVertex (polyPoints, capVertex, widthApprox) {
      var n = polyPoints.length
      var best = -1
      var bestScore = 1e300
      var wa = widthApprox > 0 ? widthApprox : 1
      for (var i = 0; i < n; i++) {
        var j = (i + 1) % n
        var a = polyPoints[i]
        var b = polyPoints[j]
        if (!a || !b || typeof a.distanceTo !== 'function') continue
        var elen = a.distanceTo(b)
        if (elen < 1e-8) continue
        var mx = (a.x + b.x) * 0.5
        var my = (a.y + b.y) * 0.5
        var dmx = mx - capVertex.x
        var dmy = my - capVertex.y
        var dmid = Math.sqrt(dmx * dmx + dmy * dmy)
        var pen = Math.abs(elen - wa) * 0.2
        var sc = dmid + pen
        if (sc < bestScore) {
          bestScore = sc
          best = i
        }
      }
      return best
    }

    /**
     * Replace straight cap L–R with L–P–Q–R: P,Q at ¼ and ¾ along the cap, shifted **outward** (opposite the
     * river body / axis) so the tip bulges instead of notching inward. `axisUx,axisUy` is unit vector along the helper into the strip.
     */
    function chamferRiverCapAtEdge (polyPoints, edgeStartIdx, axisUx, axisUy) {
      var n = polyPoints.length
      if (n < 4 || edgeStartIdx < 0 || edgeStartIdx >= n) return
      var i = edgeStartIdx
      var j = (i + 1) % n
      var L = polyPoints[i]
      var R = polyPoints[j]
      if (!L || !R) return
      var dcx = R.x - L.x
      var dcy = R.y - L.y
      var capLen = Math.sqrt(dcx * dcx + dcy * dcy)
      if (capLen < 1e-10) return
      dcx /= capLen
      dcy /= capLen
      var depth = Math.min(capLen * 0.32, capLen * 0.24)
      if (depth < 1e-12) return
      var t1 = 0.25
      var t2 = 0.75
      var Px = L.x + dcx * (capLen * t1) - axisUx * depth
      var Py = L.y + dcy * (capLen * t1) - axisUy * depth
      var Qx = L.x + dcx * (capLen * t2) - axisUx * depth
      var Qy = L.y + dcy * (capLen * t2) - axisUy * depth
      polyPoints.splice(i + 1, 0,
        new OpenLayers.Geometry.Point(Px, Py),
        new OpenLayers.Geometry.Point(Qx, Qy))
    }

    /** Two extra vertices on each end cap (45° style bevel along river axis). */
    function applyRiverEndCapChamfers45 (polyPoints, streetVertices, firstIndex, vertexWidths, capWidthStart, capWidthEnd) {
      var nv = streetVertices.length
      if (nv < 2 || !polyPoints || polyPoints.length < 4) return
      var v0 = streetVertices[firstIndex]
      var v1 = streetVertices[firstIndex + 1]
      var vA = streetVertices[nv - 2]
      var vB = streetVertices[nv - 1]
      if (!v0 || !v1 || !vA || !vB) return
      var uS = segmentUnitXY(v0, v1)
      if (uS.len < 1e-10) return
      var uE = segmentUnitXY(vB, vA)
      if (uE.len < 1e-10) return
      var w0 = vertexWidths[firstIndex] || 15
      var w1 = vertexWidths[nv - 1] || w0
      var wa0 = capWidthStart > 0 ? capWidthStart : w0
      var wa1 = capWidthEnd > 0 ? capWidthEnd : w1

      var idx0 = findRiverCapEdgeNearVertex(polyPoints, v0, wa0)
      if (idx0 < 0) return
      chamferRiverCapAtEdge(polyPoints, idx0, uS.ux, uS.uy)

      var idx1 = findRiverCapEdgeNearVertex(polyPoints, vB, wa1)
      if (idx1 < 0 || idx1 === idx0) return
      chamferRiverCapAtEdge(polyPoints, idx1, uE.ux, uE.uy)
    }

    /**
     * Per-script SDK from WME (see https://www.waze.com/editor/sdk/ — `getWmeSdk`).
     * Globals `SDK` / `sdk` are often incomplete; DataModel mutations need this instance when present.
     */
    var _wmeSdkScriptInstance = null
    function getWmeSdkScriptInstance () {
      if (_wmeSdkScriptInstance) return _wmeSdkScriptInstance
      try {
        var gw = typeof window !== 'undefined' && typeof window.getWmeSdk === 'function' ? window.getWmeSdk : (typeof getWmeSdk === 'function' ? getWmeSdk : null)
        if (!gw) return null
        var sid = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.uuid) ? String(GM_info.script.uuid) : '457548'
        var sname = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.name) ? String(GM_info.script.name) : 'WME Street to River PLUS (mod)'
        var z = gw({ scriptId: sid, scriptName: sname })
        if (z && z.DataModel) _wmeSdkScriptInstance = z
      } catch (e) {
        console_log('Street to River+: getWmeSdk: ' + e)
      }
      return _wmeSdkScriptInstance
    }

    function wmeSdkRootCandidates () {
      var list = []
      function add (x) {
        if (x && list.indexOf(x) < 0) list.push(x)
      }
      try {
        add(getWmeSdkScriptInstance())
        if (typeof SDK !== 'undefined' && SDK) add(SDK)
        if (typeof sdk !== 'undefined' && sdk) add(sdk)
      } catch (e) {}
      return list
    }

    function wmeVenueSdkScore (r) {
      if (!r || !r.DataModel || !r.DataModel.Venues) return 0
      var V = r.DataModel.Venues
      var s = 0
      if (typeof V.addVenue === 'function') s += 200
      if (typeof V.updateVenue === 'function') s += 80
      if (typeof V.updateAddress === 'function') s += 40
      if (typeof V.deleteVenue === 'function') s += 40
      if (typeof V.getById === 'function') s += 10
      return s
    }

    function wmeSegmentSdkScore (r) {
      if (!r || !r.DataModel || !r.DataModel.Segments) return 0
      var S = r.DataModel.Segments
      var s = 0
      if (typeof S.deleteSegment === 'function') s += 100
      if (typeof S.getById === 'function') s += 10
      return s
    }

    function pickWmeSdkRootByScore (scorer) {
      var candidates = wmeSdkRootCandidates()
      var best = null
      var bestScore = -1
      for (var ci = 0; ci < candidates.length; ci++) {
        var sc = scorer(candidates[ci])
        if (sc > bestScore) {
          bestScore = sc
          best = candidates[ci]
        }
      }
      return bestScore > 0 ? best : null
    }

    function getWmeSdkRoot () {
      var v = pickWmeSdkRootByScore(wmeVenueSdkScore)
      if (v) return v
      return pickWmeSdkRootByScore(wmeSegmentSdkScore)
    }

    function getVenueSdk () {
      var r = pickWmeSdkRootByScore(wmeVenueSdkScore)
      return r && r.DataModel && r.DataModel.Venues ? r.DataModel.Venues : null
    }

    function sdkGeoJsonToOl (gj) {
      if (!gj) return null
      try {
        if (W.userscripts && typeof W.userscripts.toOLGeometry === 'function')
          return W.userscripts.toOLGeometry(gj)
      } catch (e1) {}
      try {
        var fmt = new OpenLayers.Format.GeoJSON()
        var parsed = fmt.read(typeof gj === 'string' ? gj : JSON.stringify(gj))
        if (parsed && parsed.geometry) return parsed.geometry
        if (parsed && parsed.CLASS_NAME) return parsed
      } catch (e2) {}
      return null
    }

    /** OpenLayers geometry for a venue model (prefer WME SDK to avoid deprecated direct .geometry access). */
    function venueGeometryOl (venueFeature) {
      var Vs = getVenueSdk()
      if (Vs && venueFeature && venueFeature.attributes && venueFeature.attributes.id != null) {
        try {
          var dto = Vs.getById({ venueId: String(venueFeature.attributes.id) })
          if (dto && dto.geometry) {
            var g = sdkGeoJsonToOl(dto.geometry)
            if (g) return g
          }
        } catch (e) {
          console_log('venueGeometryOl: ' + e)
        }
      }
      return venueFeature.geometry
    }

    function getSegmentSdk () {
      var r = pickWmeSdkRootByScore(wmeSegmentSdkScore)
      return r && r.DataModel && r.DataModel.Segments ? r.DataModel.Segments : null
    }

    /** OpenLayers geometry for a segment model (prefer SDK — avoids deprecated sel.geometry on segments). */
    function segmentGeometryOl (segmentFeature) {
      var Ss = getSegmentSdk()
      if (Ss && segmentFeature && segmentFeature.attributes && segmentFeature.attributes.id != null) {
        try {
          var sid = Number(segmentFeature.attributes.id)
          var sdto = Ss.getById({ segmentId: sid })
          if (sdto && sdto.geometry) {
            var g = sdkGeoJsonToOl(sdto.geometry)
            if (g) return g
          }
        } catch (e) {
          console_log('segmentGeometryOl: ' + e)
        }
      }
      return segmentFeature.geometry
    }

    /** Commit venue polygon via SDK (replaces deprecated UpdateFeatureGeometry for venues). */
    function commitVenueGeometryOl (venueFeature, olPolygon, extraFields) {
      var Vs = getVenueSdk()
      if (!Vs || !venueFeature || venueFeature.attributes.id == null) {
        console_log('Street to River+: commitVenueGeometryOl: SDK or venue id missing')
        return false
      }
      try {
        var args = { venueId: String(venueFeature.attributes.id), geometry: W.userscripts.toGeoJSONGeometry(olPolygon) }
        if (extraFields && typeof extraFields === 'object') {
          for (var ek in extraFields) {
            if (Object.prototype.hasOwnProperty.call(extraFields, ek))
              args[ek] = extraFields[ek]
          }
        }
        Vs.updateVenue(args)
        return true
      } catch (e) {
        console_log('Street to River+: commitVenueGeometryOl: ' + e)
        return false
      }
    }

    /** Clear street/house on river venue via SDK (replaces deprecated UpdateFeatureAddress / repository arg). */
    function applyRiverVenueAddressClearSdk (venueFeature) {
      var Vs = getVenueSdk()
      if (!Vs || !venueFeature || venueFeature.attributes.id == null) {
        console_log('Street to River+: applyRiverVenueAddressClearSdk: SDK or venue missing')
        return false
      }
      var vid = String(venueFeature.attributes.id)
      var patch = { venueId: vid, houseNumber: '' }
      if (typeof venueFeature.getAddress === 'function' && W && W.model) {
        try {
          var addrModel = venueFeature.getAddress(W.model)
          if (addrModel && addrModel.attributes) {
            var a = addrModel.attributes
            if (a.streetID != null && a.streetID !== '')
              patch.streetId = null
          }
        } catch (e0) {
          console_log('Street to River+: getAddress(W.model): ' + e0)
        }
      }
      try {
        Vs.updateAddress(patch)
        return true
      } catch (e) {
        console_log('Street to River+: applyRiverVenueAddressClearSdk: ' + e)
        try {
          Vs.updateAddress({ venueId: vid, houseNumber: '' })
          return true
        } catch (e2) {
          console_log('Street to River+: applyRiverVenueAddressClearSdk fallback: ' + e2)
          return false
        }
      }
    }

    /** First segment pa–pb crosses an existing same-category venue boundary (any edge). Skip only when both endpoints lie inside the same ring (segment does not cut the boundary). */
    function findLandmarkCrossingFirstSegment (lmtype, pa, pb) {
      var repo = W.model.venues
      for (var t in repo.objects) {
        var lm = repo.objects[t]
        if (!lm || lm.attributes.categories[0] !== lmtype) continue
        var g = venueGeometryOl(lm)
        if (!g || typeof g.getVertices !== 'function' || typeof g.containsPoint !== 'function') continue
        if (g.containsPoint(pa) && g.containsPoint(pb)) continue
        var rv = g.getVertices()
        if (!rv || rv.length < 2) continue
        for (var j = 0; j < rv.length; j++) {
          var jn = getNextIndex(j, rv.length, 1)
          if (isIntersectingLines(rv[j], rv[jn], pa, pb))
            return lm
        }
      }
      return null
    }

    /** True if any helper segment cuts the boundary of another same-type venue (not `excludeLm`). Used to avoid fullGeometryReplace swallowing neighbours when Extend POI is off. */
    function streetCrossesOtherVenueOfType (lmtype, streetVertices, excludeLm) {
      if (!excludeLm || !streetVertices || streetVertices.length < 2) return false
      var exId = excludeLm.attributes && excludeLm.attributes.id
      var repo = W.model.venues
      for (var t in repo.objects) {
        var lm = repo.objects[t]
        if (!lm || lm.attributes.categories[0] !== lmtype) continue
        if (exId != null && lm.attributes.id === exId) continue
        var g = venueGeometryOl(lm)
        if (!g || typeof g.getVertices !== 'function' || typeof g.containsPoint !== 'function') continue
        var rv = g.getVertices()
        if (!rv || rv.length < 2) continue
        for (var si = 0; si < streetVertices.length - 1; si++) {
          var sa = streetVertices[si]
          var sb = streetVertices[si + 1]
          if (g.containsPoint(sa) && g.containsPoint(sb)) continue
          for (var j = 0; j < rv.length; j++) {
            var jn = getNextIndex(j, rv.length, 1)
            if (isIntersectingLines(rv[j], rv[jn], sa, sb))
              return true
          }
        }
      }
      return false
    }

    /** Splice donor polygon ring into main (same logic as classic donor merge). */
    function mergeDonorRiverIntoMain (mainLm, donorLm, streetVertices) {
      var mainOl = venueGeometryOl(mainLm).clone()
      var donorOl = venueGeometryOl(donorLm).clone()
      var components = mainOl.components[0].components
      var componentsDonor = donorOl.components[0].components

      var componentsRL = CalcRL(components)
      var componentsDonorRL = CalcRL(componentsDonor)
      console_log('mergeDonor: src=' + componentsRL + ', donor=' + componentsDonorRL)
      var dist = 1000000000
      var p1 = [0, 0],
        p2 = [0, 0]
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

      var componentsNew = components.slice()
      componentsNew.length = 0
      for (let i1 = 0; i1 <= p1[0]; ++i1)
        componentsNew.push(components[i1])

      if (componentsRL < 0) {
        if (componentsDonorRL < 0) {
          for (let i1 = p2[0]; i1 < componentsDonor.length; ++i1)
            componentsNew.push(componentsDonor[i1])
          for (let i1 = 0; i1 < p2[0]; ++i1)
            componentsNew.push(componentsDonor[i1])
        } else {
          for (let i1 = p2[0]; i1 >= 0; --i1)
            componentsNew.push(componentsDonor[i1])
          for (let i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
            componentsNew.push(componentsDonor[i1])
        }
      } else {
        if (componentsDonorRL < 0) {
          for (let i1 = p2[0]; i1 >= 0; --i1)
            componentsNew.push(componentsDonor[i1])
          for (let i1 = componentsDonor.length - 1; i1 > p2[0]; --i1)
            componentsNew.push(componentsDonor[i1])
        } else {
          for (let i1 = p2[0]; i1 < componentsDonor.length; ++i1)
            componentsNew.push(componentsDonor[i1])
          for (let i1 = 0; i1 < p2[0]; ++i1)
            componentsNew.push(componentsDonor[i1])
        }
      }

      for (let i1 = p1[0] + 1; i1 < components.length; ++i1)
        componentsNew.push(components[i1])

      var mergedRing = uniq(componentsNew)
      mainOl.components[0].components = mergedRing
      var VsM = getVenueSdk()
      if (!VsM) {
        console_log('Street to River+: donor merge requires SDK.DataModel.Venues (updateVenue + deleteVenue)')
        return
      }
      try {
        VsM.updateVenue({ venueId: String(mainLm.attributes.id), geometry: W.userscripts.toGeoJSONGeometry(mainOl) })
        VsM.deleteVenue({ venueId: String(donorLm.attributes.id) })
      } catch (eMrg) {
        console_log('Street to River+: SDK merge failed: ' + eMrg)
      }
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

      var selLineGeom = segmentGeometryOl(sel)

      // create place with a minimum area 100m2
      // for simple segments only (A-B)
      if (selLineGeom && selLineGeom.components && selLineGeom.components.length === 2) {
        var minArea = 100
        var pt = []
        pt[0] = selLineGeom.components[0].clone()
        pt[1] = selLineGeom.components[1].clone()

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

      var streetVertices = selLineGeom && typeof selLineGeom.getVertices === 'function'
        ? selLineGeom.getVertices()
        : (sel.geometry && typeof sel.geometry.getVertices === 'function' ? sel.geometry.getVertices() : [])
      if (!streetVertices || streetVertices.length < 2) {
        console_log('Street to River+: could not read helper segment geometry')
        alert(getString(idNoUsavedStreet))
        return false
      }
      var vertexWidths = vertexWidthsMeters(streetVertices, wStart, wEnd)
      var polyPoints = null
      var firstPolyPoint = null
      var secondPolyPoint = null

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

          var gVenScan = venueGeometryOl(riverLandmark)
          if (gVenScan && 'function' === typeof gVenScan.containsPoint) {
            if (gVenScan.containsPoint(streetVertices[0])) {
              bAddNew = false // Street is inside an existing river
              console_log('rrr=' + riverLandmark.attributes.id)
              rrr = riverLandmark
              //             break;
            }
            if (gVenScan.containsPoint(streetVertices[streetVertices.length - 1])) {
              // Donor merge deletes the other POI; only when "Extend POI at crossing" is enabled (idAttachCrossing).
              if (getLastAttachCrossing(false)) {
                console_log('donorLandmark=' + riverLandmark.attributes.id)
                donorLandmark = riverLandmark
              }
              //             break;
            }

          }
        }
      }
      riverLandmark = rrr

      var attachByFirstSegment = false
      if (getLastAttachCrossing(false) && streetVertices.length >= 2) {
        var crossLm = findLandmarkCrossingFirstSegment(lmtype, streetVertices[0], streetVertices[1])
        if (crossLm) {
          if (rrr && rrr.attributes.id !== crossLm.attributes.id)
            console_log('Street to River+: attach at crossing skipped (helper starts inside another POI)')
          else {
            if (donorLandmark && donorLandmark.attributes.id === crossLm.attributes.id)
              donorLandmark = null
            attachByFirstSegment = true
            rrr = crossLm
            riverLandmark = rrr
            bAddNew = false
            console_log('Street to River+: first-segment attach → extend venue ' + riverLandmark.attributes.id)
          }
        }
      }

      if (donorLandmark && riverLandmark && donorLandmark.attributes.id === riverLandmark.attributes.id) {
        console_log('Street to River+: donor same as main venue, clearing donor')
        donorLandmark = null
      }

      // One segment: first vertex inside a same-type POI, last outside. With Extend POI off, do not bind to that venue (would only "append" outline); create a new place along the helper instead.
      if (!getLastAttachCrossing(false) && streetVertices.length === 2 && rrr) {
        var gPierce = venueGeometryOl(rrr)
        if (gPierce && typeof gPierce.containsPoint === 'function' &&
            gPierce.containsPoint(streetVertices[0]) &&
            !gPierce.containsPoint(streetVertices[streetVertices.length - 1])) {
          console_log('Street to River+: exit segment from inside POI with Extend off → new POI instead of extending')
          rrr = null
          riverLandmark = null
          bAddNew = true
          donorLandmark = null
        }
      }

      var crossesOtherVenue = !!(rrr && streetCrossesOtherVenueOfType(lmtype, streetVertices, rrr))
      var allowFullStripReplace = !crossesOtherVenue || getLastAttachCrossing(false)
      // One helper segment while extending (!bAddNew): full-strip replace would drop the whole existing outline and keep only the ribbon along that segment (looks like the POI vanished).
      var singleSegmentExtend = !bAddNew && streetVertices.length === 2
      var fullGeometryReplace = !bAddNew && !donorLandmark && !attachByFirstSegment && allowFullStripReplace && !singleSegmentExtend

      // 2013-10-13: Classic "extend" used first-outside-vertex rules; fullGeometryReplace builds the whole helper and swaps geometry once.
      var bIsOneVerticeStreet = false
      var firstStreetVerticeOutside = 0
      if (!bAddNew && fullGeometryReplace) {
        if (streetVertices.length < 2) {
          console_log('Street to River+: need at least two vertices to replace venue geometry')
          return false
        }
      } else if (!bAddNew) {
        console_log('Expanding an existing river')
        while (firstStreetVerticeOutside < streetVertices.length) {
          if (!venueGeometryOl(riverLandmark).containsPoint(streetVertices[firstStreetVerticeOutside]))
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
      var segStartForPoly
      if (bAddNew || fullGeometryReplace) {
        first = 0
        segStartForPoly = 0
      } else {
        first = Math.max(0, firstStreetVerticeOutside - 1)
        segStartForPoly = firstStreetVerticeOutside
      }

      var capWStart = 0
      var capWEnd = 0

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
            if (i >= segStartForPoly) {
              polyPoints.unshift(li)
              polyPoints.push(ri)

              // 2013-10-17: Is first point outside river? -> Save it for later use
              if (i == segStartForPoly) {
                firstPolyPoint = li.clone()
                secondPolyPoint = ri.clone()
                polyPoints = [li, ri]
              }
            }
          } else {
            // 2013-10-17: Is point outside river?
            if (i >= segStartForPoly) {
              polyPoints.unshift(leftPb.clone())
              polyPoints.push(rightPb.clone())

              // 2013-10-17: Is first point outside river? -> Save it for later use
              if (i == segStartForPoly) {
                firstPolyPoint = leftPb.clone()
                secondPolyPoint = rightPb.clone()
                polyPoints = [leftPb, rightPb]
              }
            }
          }
        }

        prevLeftEq = leftEq
        prevRightEq = rightEq

        if (i === first)
          capWStart = leftPa.distanceTo(rightPa)
        capWEnd = leftPb.distanceTo(rightPb)

        // 2013-06-03: Is Waze limit reached?
        if ((polyPoints.length > 50) && !isUnlimitedSize) {
          break
        }
      }

      if (!fullGeometryReplace && bIsOneVerticeStreet) {
        firstPolyPoint = leftPb.clone()
        secondPolyPoint = rightPb.clone()
        polyPoints = [leftPb, rightPb]
        console_log('One vertice river:' + polyPoints.length)
      } else {
        polyPoints.push(rightPb)
        polyPoints.push(leftPb)
      }
      console_log('River polygon: done')

      if (getLastEndCapRound(true) && polyPoints && polyPoints.length >= 4 && capWStart > 1e-6)
        applyRiverEndCapChamfers45(polyPoints, streetVertices, first, vertexWidths, capWStart, capWEnd)
      if (polyPoints && polyPoints.length >= 4)
        ensureRiverRingSimple(polyPoints)

      // 2014-01-09: Create or expand an existing river?
      if (bAddNew) {
        var polygon = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(polyPoints))
        var VsNew = getVenueSdk()
        if (!VsNew) {
          console_log('Street to River+: SDK.DataModel.Venues.addVenue is required to create a new place')
          return false
        }
        var idNew
        try {
          idNew = VsNew.addVenue({ category: lmtype, geometry: W.userscripts.toGeoJSONGeometry(polygon) })
        } catch (eAdd) {
          console_log('Street to River+: addVenue failed: ' + eAdd)
          return false
        }
        riverLandmark = null
        for (var tNew in W.model.venues.objects) {
          var candNew = W.model.venues.objects[tNew]
          if (candNew && String(candNew.attributes.id) === String(idNew)) {
            riverLandmark = candNew
            break
          }
        }
        if (!riverLandmark)
          console_log('Street to River+: addVenue returned ' + idNew + ' but venue model not found in W.model.venues')
        if (street && street.attributes.name)
          VsNew.updateVenue({ venueId: String(idNew), name: stripRiverWidthPrefixFromStreetName(street.attributes.name) })
        try {
          if (riverLandmark)
            W.selectionManager.setSelectedModels([riverLandmark])
        } catch (err) {
          console_log(err)
        }

        if (lmtype !== 'OTHER' && riverLandmark) {
          console_log('bAddNew')
          if (!applyRiverVenueAddressClearSdk(riverLandmark))
            console_log('Street to River+: venue address clear (SDK) failed after add')
        }

      } else {
        if (donorLandmark && getLastAttachCrossing(false)) {
          mergeDonorRiverIntoMain(riverLandmark, donorLandmark, streetVertices)
          return true
        }
        if (fullGeometryReplace) {
          console_log('Street to River+: replace venue geometry in one step, id=' + riverLandmark.attributes.id)
          var replacePolygon = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(polyPoints))
          var nameExtra = street && street.attributes.name
            ? { name: stripRiverWidthPrefixFromStreetName(street.attributes.name) }
            : null
          if (!commitVenueGeometryOl(riverLandmark, replacePolygon, nameExtra))
            console_log('Street to River+: full geometry replace failed (needs SDK.DataModel.Venues.updateVenue)')

          try {
            W.selectionManager.setSelectedModels([riverLandmark])
          } catch (err) {
            console_log(err)
          }

          if (lmtype !== 'OTHER' && riverLandmark) {
            if (!applyRiverVenueAddressClearSdk(riverLandmark))
              console_log('Street to River+: venue address clear (SDK) failed after replace')
          }
          return true
        }

        var gWorking = venueGeometryOl(riverLandmark)
        if (!gWorking || typeof gWorking.clone !== 'function') {
          console_log('Street to River+: extend path: no venue geometry')
          return false
        }
        var workingPolygon = gWorking.clone()
        var originalGeometry = workingPolygon.clone()
        var riverVertices = workingPolygon.getVertices()
        console_log('Total river vertices:' + riverVertices.length)

        if (firstStreetVerticeOutside === 0)
          firstStreetVerticeOutside = 1

        var distance = 0
        var minDistance = 100000
        var indexNearestPolyPoint = 0
        for (i = 0; i < polyPoints.length; i++) {
          if (!polyPoints[i] || typeof polyPoints[i].distanceTo !== 'function') continue
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
            if (!polyPoints[indexNearestPolyPoint] || typeof polyPoints[indexNearestPolyPoint].distanceTo !== 'function') break
            distance = polyPoints[indexNearestPolyPoint].distanceTo(riverVertices[i])
            if (distance < minDistance) {
              minDistance = distance
              indexNearestRiverVertice = i
            }
          }
        }
        console_log('indexNearestRiverVertice: ' + indexNearestRiverVertice)
        var nextRiverVertice = getNextIndex(indexNearestRiverVertice, riverVertices.length, 1)

        console_log('nextRiverVertice: ' + nextRiverVertice)

        console_log('firstPolyPoint:' + firstPolyPoint)
        console_log('secondPolyPoint:' + secondPolyPoint)

        if (!firstPolyPoint || !secondPolyPoint || firstPolyPoint.x == null || secondPolyPoint.x == null) {
          var iOut = Math.max(0, Math.min(firstStreetVerticeOutside, streetVertices.length - 1))
          var iOut1 = Math.max(0, Math.min(firstStreetVerticeOutside + 1, streetVertices.length - 1))
          firstPolyPoint = streetVertices[iOut]
          secondPolyPoint = streetVertices[iOut1]
        }

        var inc = 1
        var incIndex = 0
        if (isIntersectingLines(riverVertices[indexNearestRiverVertice], firstPolyPoint, riverVertices[nextRiverVertice], secondPolyPoint)) {
          console_log('Lines intersect: clockwise polygon')
          inc = +1
          incIndex = 1
        } else {
          inc = +1
          console_log('Lines doesn\'t intersect: counter-clockwise polygon')
        }

        var indexNextVertice = 1
        var index = Math.floor(polyPoints.length / 2) - 1
        if (bIsOneVerticeStreet)
          index += 1
        if (index < 0) index = 0
        if (polyPoints.length > 0 && index >= polyPoints.length) index = polyPoints.length - 1

        for (i = 0; i < polyPoints.length; i++) {
          var pv = polyPoints[index]
          if (!pv || typeof pv.x !== 'number' || typeof pv.y !== 'number') {
            index = getNextIndex(index, polyPoints.length, inc)
            continue
          }
          if (!originalGeometry.containsPoint(pv)) {

            workingPolygon.components[0].addComponent(pv, indexNearestRiverVertice + indexNextVertice)

            console_log('Added: ' + index)
            indexNextVertice += incIndex
          }
          index = getNextIndex(index, polyPoints.length, inc)
        }

        if (!commitVenueGeometryOl(riverLandmark, workingPolygon, null))
          console_log('Street to River+: extend venue geometry failed (needs SDK.DataModel.Venues.updateVenue)')

        if (lmtype !== 'OTHER' && riverLandmark) {
          if (!applyRiverVenueAddressClearSdk(riverLandmark))
            console_log('Street to River+: venue address clear (SDK) failed after extend')
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
      } else if ('number' == typeof eqb.x) {
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
        localStorage.riverWidthEnd = Number(riverWidth)
      else
        console_log('No web storage support')
    }

    function getLastRiverWidthEnd (defaultRiverWidth) {
      if (typeof Storage !== 'undefined' && localStorage.riverWidthEnd != null && localStorage.riverWidthEnd !== '')
        return Number(localStorage.riverWidthEnd)
      return getLastRiverWidth(defaultRiverWidth)
    }

    function setLastRiverWidthUniform (uniform) {
      if (typeof Storage !== 'undefined')
        localStorage.riverWidthUniform = uniform ? '1' : '0'
      else
        console_log('No web storage support')
    }

    function getLastRiverWidthUniform (defaultUniform) {
      if (typeof Storage !== 'undefined' && localStorage.riverWidthUniform != null && localStorage.riverWidthUniform !== '')
        return localStorage.riverWidthUniform === '1' || Number(localStorage.riverWidthUniform) === 1
      return defaultUniform !== false
    }

    function setLastAttachCrossing (on) {
      if (typeof Storage !== 'undefined')
        localStorage.riverAttachCrossing = on ? '1' : '0'
      else
        console_log('No web storage support')
    }

    function getLastAttachCrossing (defaultOn) {
      if (typeof Storage !== 'undefined' && localStorage.riverAttachCrossing != null && localStorage.riverAttachCrossing !== '')
        return localStorage.riverAttachCrossing === '1' || Number(localStorage.riverAttachCrossing) === 1
      return !!defaultOn
    }

    function setLastEndCapRound (on) {
      if (typeof Storage !== 'undefined')
        localStorage.riverEndCapRound = on ? '1' : '0'
      else
        console_log('No web storage support')
    }

    function getLastEndCapRound (defaultOn) {
      if (typeof Storage !== 'undefined' && localStorage.riverEndCapRound != null && localStorage.riverEndCapRound !== '')
        return localStorage.riverEndCapRound === '1' || Number(localStorage.riverEndCapRound) === 1
      return !!defaultOn
    }

    // 2013-06-09: Save current river Width
    function setLastRiverWidth (riverWidth) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and localStorage support!
        localStorage.riverWidth = Number(riverWidth)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-06-09: Returns last saved river width
    function getLastRiverWidth (defaultRiverWidth) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-06-09: Yes! localStorage and localStorage support!
        if (localStorage.riverWidth)
          return Number(localStorage.riverWidth)
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
        // 2013-06-09: Yes! localStorage and localStorage support!
        localStorage.isUnlimitedSize = Number(isUnlimitedSize)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-10-20: Returns last saved unlimited size preference
    function getLastIsUnlimitedSize (defaultValue) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-10-20: Yes! localStorage and localStorage support!
        if (localStorage.isUnlimitedSize)
          return Number(localStorage.isUnlimitedSize)
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
        // 2013-06-09: Yes! localStorage and localStorage support!
        localStorage.isDeleteSegment = Number(isDeleteSegment)
      } else {
        // Sorry! No web storage support..
        console_log('No web storage support')
      }
    }

    // 2013-10-20: Returns last saved unlimited size preference
    function getLastIsDeleteSegment (defaultValue) {
      if (typeof (Storage) !== 'undefined') {
        // 2013-10-20: Yes! localStorage and localStorage support!
        if (localStorage.isDeleteSegment)
          return Number(localStorage.isDeleteSegment)
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
            'Mismo ancho en todo el tramo', 'Sustituir POI si el 1.er tramo cruza el borde',
            'Redondear extremos del tramo']
          break
        case 'fr': // 2014-06-05: French
          langText = ['', 'Largeur (mètres)', 'Créez une nouvelle rue, sélectionnez-la et cliquez sur ce bouton.', 'Rue en rivière', 'Taille illimitée (dangereux)',
            'Pas de nouvelle rue non enregistrée trouvée !', 'Tous les segments de la rue sont dans la rivière. Impossible de continuer.',
            'Plusieurs segments de rue dans la rivière. Impossible de continuer.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Largeur fin (m)',
            'Même largeur sur toute la longueur', 'Remplacer le POI si le 1er segment croise le bord',
            'Arrondir les extrémités du ruban']
          break
        case 'ru': // 2014-06-05: Russian
          langText = ['', 'Ширина (в метрах)', 'Создайте новую дорогу (не сохраняйте), выберите ее и нажмите эту кнопку.', 'Река', 'Вся длина',
            'Не выделено ни одной не сохраненной дороги!', 'Все сегменты дороги находятся внутри реки. Преобразование невозможно.',
            'Слишком много сегментов дороги находится внутри реки. Преобразование невозможно.', 'Контур', 'Лес', 'Удалить сегмент', 'Канал', 'Ширина в конце (м)',
            'Одна ширина на всю длину', 'Дополнять POI при пересечении 1-го сегмента (сохранять контур)',
            'Закруглять торцы полосы']
          break
        case 'uk': // 2018-05-03: Ukrainian
          langText = ['', 'Ширина (в метрах)', 'Створіть нову дорогу (не зберігайте і не знімайте виділення) та натисніть цю кнопку.', 'Ріка', 'Безлімітна довжина (небезпечно)',
            'Не виділено жодної збереженої дороги!', 'Усі сегменти дороги знаходяться всередині ріки. Перетворення неможливе.',
            'Занадто багато сегментів дороги знаходяться всередині ріки. Перетворення неможливе.', 'Контур', 'Ліс', 'Видалити сегмент', 'Канал', 'Ширина в кінці (м)',
            'Та сама ширина на всю довжину', 'Доповнювати POI при перетині 1-го сегмента (зберігати контур)',
            'Заокруглювати кінці смуги']
          break
        case 'hu': // 2014-07-02: Hungarian
          langText = ['', 'Szélesség (méter)', 'Hozzon létre egy új utcát, válassza ki, majd kattintson erre a gombra.', 'Utcából folyó', 'Korlátlan méretű (nem biztonságos)',
            'Nem található nem mentett és kiválasztott új utca!', 'Az útszakasz a folyón belül található! Nem lehet folytatni.',
            'Minden útszakasz a folyón belül található! Nem lehet folytatni.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Szélesség vége (m)',
            'Azonos szélesség a teljes hosszon', 'POI cseréje az 1. szakasz metszésénél',
            'Végek lekerekítése']
          break
        case 'cs': // 2014-07-03: Czech
          langText = ['', 'Šířka (metrů)', 'Vytvořte osu řeky, vyberte segment a stiskněte toto tlačítko.', 'Silnice na řeku', 'Neomezená šířka (nebezpečné)',
            'Nebyly vybrány žádné neuložené segmenty!', 'Všechny segmenty jsou uvnitř řeky! Nelze pokračovat.',
            'Uvnitř řeky je více segmentů! Nelze pokračovat.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Šířka na konci (m)',
            'Stejná šířka po celé délce', 'Nahradit POI při průsečíku 1. úseku',
            'Zaoblit konce pruhu']
          break
        case 'pl': // 2014-11-08: Polish - By Zniwek
          langText = ['', 'Szerokość (w metrach)', 'Stwórz ulicę, wybierz ją i kliknij ten przycisk.', 'Ulica w Rzekę', 'Nieskończony rozmiar (niebezpieczne)',
            'Nie znaleziono nowej i niezapisanej ulicy!', 'Wszystkie segmenty ulicy wewnątrz rzeki. Nie mogę kontynuować.',
            'Wiele segmentów ulicy wewnątrz rzeki. Nie mogę kontynuować.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Szerokość na końcu (m)',
            'Ta sama szerokość na całej długości', 'Zamień POI przy przecięciu 1. odcinka',
            'Zaokrąglaj końce pasa']
          break
        case 'pt-br': // 2015-04-05: Portuguese - By esmota
          langText = ['', 'Largura (metros)', 'Criar uma nova rua, selecione e clique neste botão.', 'Rua para Rio', 'Comprimento ilimitado (instável)',
            'Nenhuma nova rua, sem salvar, selecionada!', 'Todos os segmentos de rua estão dentro de um rio. Nada a fazer.',
            'Múltiplos segmentos de rua dentro de um rio. Impossível continuar.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Largura final (m)',
            'Mesma largura em todo o trecho', 'Substituir POI se o 1.º segmento cruzar a borda',
            'Arredondar as pontas da faixa']
          break
        default: // 2014-06-05: English
          langText = ['', 'Width (in meters)', 'Create a new street, select and click this button.', 'River', 'Unlimited size (unsafe)',
            'No unsaved and selected new street found!', 'All street segments inside river. Cannot continue.',
            'Multiple street segments inside river. Cannot continue.', 'Other', 'Forest', 'Delete segment', 'Canal', 'Width end (m)',
            'Same width entire length', 'Extend POI when first segment crosses it (keeps rest of outline)',
            'Round strip ends']
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

/*
referenced from https://greasyfork.org/en/scripts/26340-wme-place-interface-enhancements
*/
    // ======================================================================
    // SDK SHORTCUT FORMAT CONVERTERS
    //
    // Why these converters are needed:
    // The WME SDK Shortcuts API (wmeSDK.Shortcuts) returns shortcut keys in
    // inconsistent formats depending on context:
    //
    //   - On initial load / after page reload → combo format ("A+R", "C+S+G")
    //   - After the user edits a shortcut in WME's UI → raw format ("4,82")
    //
    // The raw format is "modValue,keyCode" where modValue is a bitfield
    // (C=1, S=2, A=4) and keyCode is the numeric keyboard key code. The combo
    // format is the human-readable string like "C+S+G".
    //
    // These converters let us:
    //   1. Normalize shortcut keys to a canonical { raw, combo } shape for
    //      reliable persistence in localStorage (via saveOptions/getOptions).
    //   2. Detect real user changes when polling (checkSDKShortcutChanges)
    //      by comparing normalized combo strings.
    //   3. Handle legacy shortcuts migrated from the old WME accelerator /
    //      localStorage KBS format which stored bare key code numbers.
    //
    // Reference: "Shortcuts Full Lifecycle" and the SDK classes.md
    // → Shortcuts.createShortcut() documentation.
    // ======================================================================
    var _KEYCODE_TO_CHAR = {
      65:'A',66:'B',67:'C',68:'D',69:'E',70:'F',71:'G',72:'H',73:'I',74:'J',75:'K',76:'L',
      77:'M',78:'N',79:'O',80:'P',81:'Q',82:'R',83:'S',84:'T',85:'U',86:'V',87:'W',88:'X',
      89:'Y',90:'Z',
      48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',
      112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',
      118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',
      32:'Space',13:'Enter',9:'Tab',27:'Esc',8:'Backspace',46:'Delete',
      36:'Home',35:'End',33:'PageUp',34:'PageDown',45:'Insert',
      37:'\u2190',38:'\u2191',39:'\u2192',40:'\u2193',
      188:',',190:'.',191:'/',186:';',222:"'",219:'[',221:']',220:'\\',189:'-',187:'=',192:'`',
    }

    var _CHAR_TO_KEYCODE = Object.fromEntries(
      Object.entries(_KEYCODE_TO_CHAR).map(function (e) { return [e[1].toUpperCase(), Number(e[0])] })
    )

    var _MOD_CHAR_TO_VAL = { C: 1, S: 2, A: 4 }

    function _comboToRaw (str) {
      if (!str || str === '' || str === '-1' || str === 'None') return null
      if (/^\d+,-?\d+$/.test(str)) {
        var kc = parseInt(str.split(',')[1], 10)
        return kc < 0 ? null : str
      }
      // Handle bare numeric key code (legacy format stored just the key code number, e.g. "67" for 'C')
      if (/^\d+$/.test(str)) {
        return '0,' + str
      }
      var us = String(str).toUpperCase()
      if (/^[A-Z0-9]$/.test(us)) return '0,' + us.charCodeAt(0)
      if (_CHAR_TO_KEYCODE[us] !== undefined) return '0,' + _CHAR_TO_KEYCODE[us]
      var lm = us.match(/^([ACS]+)\+([A-Z0-9])$/)
      if (lm) {
        var mv = lm[1].split('').reduce(function (a, c) { return a | (_MOD_CHAR_TO_VAL[c] || 0) }, 0)
        return mv + ',' + lm[2].charCodeAt(0)
      }
      var nm = us.match(/^([ACS]+)\.(\d+)$/)
      if (!nm) nm = us.match(/^([ACS]+)\+(\d+)$/)
      if (nm) {
        var mv2 = nm[1].split('').reduce(function (a, c) { return a | (_MOD_CHAR_TO_VAL[c] || 0) }, 0)
        return mv2 + ',' + nm[2]
      }
      var sm = us.match(/^([ACS]+)\+(.+)$/)
      if (sm && _CHAR_TO_KEYCODE[sm[2]] !== undefined) {
        var mv3 = sm[1].split('').reduce(function (a, c) { return a | (_MOD_CHAR_TO_VAL[c] || 0) }, 0)
        return mv3 + ',' + _CHAR_TO_KEYCODE[sm[2]]
      }
      return null
    }

    function _rawToCombo (str) {
      var raw = _comboToRaw(str)
      if (!raw) return null
      var parts = raw.split(',')
      var modValue = parseInt(parts[0], 10)
      var keyCode = parseInt(parts[1], 10)
      var keyChar = _KEYCODE_TO_CHAR[keyCode] || String(keyCode)
      var mods = ''
      if (modValue & 1) mods += 'C'
      if (modValue & 2) mods += 'S'
      if (modValue & 4) mods += 'A'
      return mods ? mods + '+' + keyChar : keyChar
    }

    function _normalizeShortcut (value) {
      var src = value && typeof value === 'object' ? (value.raw || value.combo) : value
      var raw = _comboToRaw(src)
      var combo = _rawToCombo(raw)
      return { raw: raw, combo: combo }
    }

    // ======================================================================
    // LEGACY ACTION → SDK SETTINGSKEY MAPPING
    // ======================================================================
    var _LEGACY_ACTION_TO_SETTINGSKEY = {
      'WME-Street-to-River_other': 'poi_other',
      'WME-Street-to-River_river': 'poi_river',
      'WME-Street-to-River_forest': 'poi_forest',
      'WME-Street-to-River_canal': 'poi_canal',
    }

    // ======================================================================
    // BUILD SDK SHORTCUT DEFINITIONS
    // ======================================================================
    function buildSDKShortcutDefs () {
      return [
        { id: 'other',  title: 'Other',  poiType: 'OTHER' },
        { id: 'river',  title: 'River',  poiType: 'RIVER_STREAM' },
        { id: 'forest', title: 'Forest', poiType: 'FOREST_GROVE' },
        { id: 'canal',  title: 'Canal',  poiType: 'CANAL' },
      ].map(function (pt) {
        return {
          id: 'WME-Street-to-River_' + pt.id,
          description: 'Street to ' + pt.title,
          settingsKey: 'poi_' + pt.id,
          callback: function () { doPOI(undefined, pt.poiType) },
        }
      })
    }

    // ======================================================================
    // PERSISTENCE: saveOptions / getOptions
    // ======================================================================
    var _SETTINGS_KEY = 'WME-Street-to-River-Plus_SDKShortcuts'

    // === SDK SHORTCUT INITIALIZATION (after all var data declarations) ===
    _sdkShortcutDefs = buildSDKShortcutDefs()
    migrateLegacyShortcuts()
    initializeSDKShortcuts()
    window.addEventListener('beforeunload', checkSDKShortcutChanges)
    setInterval(checkSDKShortcutChanges, 5000)

    function saveOptions (opts) {
      localStorage.setItem(_SETTINGS_KEY, JSON.stringify(opts))
    }

    function getOptions () {
      try {
        var saved = JSON.parse(localStorage.getItem(_SETTINGS_KEY))
        if (saved && typeof saved === 'object') return saved
      } catch (e) {}
      return { sdkShortcuts: {} }
    }

    // ======================================================================
    // MIGRATE LEGACY SHORTCUTS (one-time from localStorage KBS format)
    // ======================================================================
    function migrateLegacyShortcuts () {
      var legacyKey = 'WME-Street-to-RiverKBS'
      var legacyRaw
      try {
        legacyRaw = JSON.parse(localStorage.getItem(legacyKey))
        if (!Array.isArray(legacyRaw)) return
      } catch (e) { return }

      var opts = getOptions()
      if (!opts.sdkShortcuts) opts.sdkShortcuts = {}
      var migrated = false

      for (var i = 0; i < legacyRaw.length; i++) {
        var entry = legacyRaw[i]
        var keys = Object.keys(entry)
        if (keys.length === 0) continue
        var shortcutString = keys[0]
        var actionId = entry[shortcutString]
        var settingsKey = _LEGACY_ACTION_TO_SETTINGSKEY[actionId]
        if (!settingsKey) continue
        if (!shortcutString || shortcutString === '-1' || shortcutString === 'None') continue
        if (opts.sdkShortcuts[settingsKey] && opts.sdkShortcuts[settingsKey].combo !== null) continue
        opts.sdkShortcuts[settingsKey] = _normalizeShortcut(shortcutString)
        migrated = true
        console_log('Migrated legacy shortcut "' + actionId + '" (' + shortcutString + ') \u2192 ' + settingsKey + ': ' + opts.sdkShortcuts[settingsKey].combo)
      }

      if (migrated) {
        saveOptions(opts)
        localStorage.removeItem(legacyKey)
        console_log('Legacy shortcut migration complete. Removed key "' + legacyKey + '".')
      }
    }

    // ======================================================================
    // INITIALIZE SDK SHORTCUTS
    // ======================================================================
    function initializeSDKShortcuts () {
      var sdk = getWmeSdkScriptInstance()
      if (!sdk || !sdk.Shortcuts || !_sdkShortcutDefs) return

      // Delete existing registrations for our shortcuts
      for (var i = 0; i < _sdkShortcutDefs.length; i++) {
        var def = _sdkShortcutDefs[i]
        if (sdk.Shortcuts.isShortcutRegistered({ shortcutId: def.id })) {
          sdk.Shortcuts.deleteShortcut({ shortcutId: def.id })
        }
      }

      // Load saved shortcut keys and register all
      var opts = getOptions()
      if (!opts.sdkShortcuts) opts.sdkShortcuts = {}

      for (var j = 0; j < _sdkShortcutDefs.length; j++) {
        var sd = _sdkShortcutDefs[j]
        var saved = opts.sdkShortcuts[sd.settingsKey]
        opts.sdkShortcuts[sd.settingsKey] = _normalizeShortcut(saved)

        try {
          sdk.Shortcuts.createShortcut({
            shortcutId: sd.id,
            description: sd.description,
            callback: sd.callback,
            shortcutKeys: opts.sdkShortcuts[sd.settingsKey].combo,
          })
        } catch (error) {
          if (String(error).indexOf('already in use') !== -1) {
            opts.sdkShortcuts[sd.settingsKey] = { raw: null, combo: null }
            try {
              sdk.Shortcuts.createShortcut({
                shortcutId: sd.id,
                description: sd.description,
                callback: sd.callback,
                shortcutKeys: null,
              })
            } catch (error2) {
              console_log('Unable to create shortcut: ' + sd.id + ' - ' + error2)
            }
          } else {
            console_log('Unable to create shortcut: ' + sd.id + ' - ' + error)
          }
        }
      }
      saveOptions(opts)
      console_log('SDK shortcuts initialized (' + _sdkShortcutDefs.length + ' total)')
    }

    // ======================================================================
    // POLL SHORTCUT CHANGES (persist user edits every 5s + on beforeunload)
    // ======================================================================
    function checkSDKShortcutChanges () {
      var sdk = getWmeSdkScriptInstance()
      if (!sdk || !sdk.Shortcuts || !_sdkShortcutDefs) return

      var shortcuts = sdk.Shortcuts.getAllShortcuts()
      var triggerSave = false

      for (var i = 0; i < shortcuts.length; i++) {
        var shortcut = shortcuts[i]
        var matchingDef = null
        for (var j = 0; j < _sdkShortcutDefs.length; j++) {
          if (_sdkShortcutDefs[j].id === shortcut.shortcutId) {
            matchingDef = _sdkShortcutDefs[j]
            break
          }
        }
        if (!matchingDef) continue

        var normalized = _normalizeShortcut(shortcut.shortcutKeys)
        var opts = getOptions()
        if (!opts.sdkShortcuts) opts.sdkShortcuts = {}
        if (opts.sdkShortcuts[matchingDef.settingsKey] && opts.sdkShortcuts[matchingDef.settingsKey].combo !== normalized.combo) {
          triggerSave = true
          break
        }
      }

      if (triggerSave) {
        for (var k = 0; k < shortcuts.length; k++) {
          var s = shortcuts[k]
          var matchDef = null
          for (var l = 0; l < _sdkShortcutDefs.length; l++) {
            if (_sdkShortcutDefs[l].id === s.shortcutId) {
              matchDef = _sdkShortcutDefs[l]
              break
            }
          }
          if (matchDef && matchDef.settingsKey) {
            var opts2 = getOptions()
            if (!opts2.sdkShortcuts) opts2.sdkShortcuts = {}
            opts2.sdkShortcuts[matchDef.settingsKey] = _normalizeShortcut(s.shortcutKeys)
            saveOptions(opts2)
          }
        }
        console_log('SDK shortcut changes saved.')
      }
    }
  }

  streetToRiver_bootstrap()

  /* ********************************************************** */
})()
