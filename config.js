module.exports = {
  /** Site MetaData (Required all)*/
  title: `이것저것`,                           // (* Required)
  description: `AnGwangHo Development Blog`,          // (* Required)
  author: `AnGwangHo`,                         // (* Required)
  siteUrl: 'https://angwangho.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.jpg', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Front-End 개발자',
  name: 'An GwangHo',
  company: 'KakaoPay',
  location: 'Korea',
  email: 'akh4444@nate.com',
  website: 'https://angwangho.github.io/',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/AnGwangHo',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-152733182-2',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'ajk2O5QdXHDdidvXZAtDcuue5yoWbbeFcu-EGZYATIo', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'ca-pub-7109564916675445', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
