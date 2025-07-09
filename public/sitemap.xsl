<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" indent="yes" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body { font-family: sans-serif; line-height: 1.5; padding: 20px; }
          h1 { font-size: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { padding: 6px 12px; border: 1px solid #ccc; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <table>
          <tr><th>URL</th><th>Last Modified</th></tr>
          <xsl:for-each select="//sitemap:url">
            <tr>
              <td><xsl:value-of select="sitemap:loc" /></td>
              <td><xsl:value-of select="sitemap:lastmod" /></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
