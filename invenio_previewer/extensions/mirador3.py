"""Mirador 3 previewer."""

from __future__ import absolute_import, print_function

from flask import render_template

from ..proxies import current_previewer

previewable_extensions = ['tif', 'tiff', 'jpg', 'png']


def can_preview(file):
    """Check if file can be previewed."""
    return file.has_extensions('.tif', '.tiff', '.jpg', '.png')


def preview(file):
    """Preview file."""
    return render_template(
        'invenio_previewer/mirador3.html',
        file=file,
        html_tags='dir="ltr" mozdisallowselectionprint moznomarginboxes',
#        css_bundles=['pdfjs_css.css'],  #don't pass these becuase mirador not loading from webpack
#        js_bundles=current_previewer.js_bundles + [
#            'mirador3_js.js',
#        ]
    )
