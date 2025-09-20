var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* 
*
* Captcha Validator 1.0
*
* This script is distributed under the GNU Lesser General Public License.
* Read the entire license text here: http://www.gnu.org/licenses/lgpl.html
*
* Copyright (C) 2010 HTML Form Guide 
* http://www.html-form-guide.com/
*/

function FG_CaptchaValidator(captcha_ip,captcha_img)
{
    this.captcha_ip = captcha_ip;
    
    this.captcha_img = captcha_img;

    this.validatedCode=''  

    this.validate = function()
    {
        if(this.validatedCode.length==0 ||
           this.validatedCode != this.captcha_ip.value)
        {
            this.ValidateOnline();
            return false;
        }
        else
        {
            return true;
        }
    }

  this.OnSuccess = function()
  {
     var msg = this.GetResponseText();
     if(msg == 'success')
     {
        this.validatedCode = this.captcha_ip.value;
        if(this.captcha_ip.form.onsubmit())
        {
            this.captcha_ip.form.submit();
        }
     }
     else
     {
        sfm_show_error_msg(msg,this.captcha_ip);
        document.error_disp_handler.FinalShowMsg();
     }
     
  }

  this.ValidateOnline = function()
  {
      var url = captcha_img.src;
      var postStr = this.captcha_ip.name + "=" + 
      encodeURIComponent( this.captcha_ip.value )+'&fg_validate_captcha=y';

      this.Init('POST', url);

      this.Send(postStr);
  }
}

FG_CaptchaValidator.prototype = new FG_Ajax();

function FG_Ajax()
{
   var _request = null;
   var _this = null;
       
   this.Init = function(method, url)
   {
      _Init();
      _this = this;
               
      switch (arguments.length)
      {
         case 2:
            _request.open(method, url);
            break;
                               
         case 3:
            _request.open(method, url, arguments[2]);
            break;
      }
               
      if (arguments.length >= 4)
      {
         _request.open(method, url, arguments[2], arguments[3]);
      }

      this.SetRequestHeader("Content-Type", 
            "application/x-www-form-urlencoded; charset=UTF-8");
   }
    
   this.SetRequestHeader = function(field, value)
   {
      if (_request) 
      { 
        _request.setRequestHeader(field, value) 
      };
   }
       
   this.Send = function(data)
   {
      if (_request){ _request.send(data)};
   }

   this.GetResponseText = function()
   {
      return (_request) ? _request.responseText : null;
   }
       
   this.OnSuccess = function() { };
   this.OnFailure = function() { };
       
   function _OnSuccess() 
   { 
        _this.OnSuccess(); 
   }

   function _OnFailure() 
   { 
      _this.OnFailure(); 
   }

   function _Init()
   {
      _request = _GetXmlHttpRequestObject();
      if(_request)
      {
        _request.onreadystatechange = _StateHandler;
      }
   }
       
   function _StateHandler()
   {
      if(4 == _request.readyState )
      {
        if (_request.status == 200)
        {
           _OnSuccess();
        }
        else
        {
           _OnFailure();        
        }
      }
   }
       
   function _GetXmlHttpRequestObject()
   {
     if (window.XMLHttpRequest) 
     {
        return new XMLHttpRequest(); //Mozilla, Safari ...
     } 
     else 
     if (window.ActiveXObject) 
     {
        return new ActiveXObject("Microsoft.XMLHTTP"); //IE
     } 
     else 
     {
        return null;
     }
   }
}



}
/*
     FILE ARCHIVED ON 22:08:27 Nov 13, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:49:46 Sep 20, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.55
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.018
  esindex: 0.01
  cdx.remote: 10.59
  LoadShardBlock: 84.853 (3)
  PetaboxLoader3.datanode: 236.706 (4)
  load_resource: 241.283
  PetaboxLoader3.resolve: 64.366
*/