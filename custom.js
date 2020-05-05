jQuery( document ).ready(function() 
                         {
    if (typeof ClipboardJS === 'function') {
        new ClipboardJS('.btn');
    }

    // q23.amo - pos sticky
    posSticky();

    // q23.jgo - reward modal
    jQuery(".rewardModal").click(function(){
        jQuery("input[name=p-url]").val(jQuery(this).data('url'));
        jQuery("input[name=p-name]").val(jQuery(this).data('title'));
        jQuery("#modalpoints").html(jQuery(this).data('points'));
        jQuery("#modaltitle").html(jQuery(this).data('title'));
        jQuery("#rewardModal").modal('show');
    });

    paginateTable();
	

	jQuery('#avm-toggle-button-1').click(function() {
	  jQuery('#avm-toggle-div-1').toggle('slow', function(){
		  
		  if (jQuery('#avm-toggle-button-1').hasClass("avm-toggle-button-1-down")) {
			  
        		jQuery('#avm-toggle-button-1').removeClass("avm-toggle-button-1-down");
				jQuery('#avm-toggle-button-1').addClass("avm-toggle-button-1-up");
				
		  } else if (jQuery('#avm-toggle-button-1').hasClass("avm-toggle-button-1-up")) {
			  
      		  jQuery('#avm-toggle-button-1').removeClass("avm-toggle-button-1-up");
			  jQuery('#avm-toggle-button-1').addClass("avm-toggle-button-1-down");
			  
		  }

   	 	});
	});
	
	

	
	
	
	
	jQuery('#avm-toggle-button-2').click(function() {
	  jQuery('#avm-toggle-div-2').toggle('slow', function(){

		  
		  if (jQuery('#avm-toggle-button-2').hasClass("avm-toggle-button-2-down")) {
			  
        		jQuery('#avm-toggle-button-2').removeClass("avm-toggle-button-2-down");
				jQuery('#avm-toggle-button-2').addClass("avm-toggle-button-2-up");
				
		  } else if (jQuery('#avm-toggle-button-2').hasClass("avm-toggle-button-2-up")) {
			  
      		  jQuery('#avm-toggle-button-2').removeClass("avm-toggle-button-2-up");
			  jQuery('#avm-toggle-button-2').addClass("avm-toggle-button-2-down");
			  
		  }

   	 	});
	});
	
	
	


    jQuery('#profile_popover').popover({
        html: true,
        content: function () {
            return jQuery(this).find('.content').html();
        },
        template: '<div class="popover popover-usermenu" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content popover-profile"></div></div>'
    });

    jQuery(document).click(function (e) {
        jQuery('[data-toggle="popover"]').each(function () {
            if (!jQuery(this).is(e.target) && jQuery(this).has(e.target).length === 0 && jQuery('.popover').has(e.target).length === 0) {
                if (jQuery(this).attr('aria-describedby')!==undefined) {
                    jQuery('#profile_popover').trigger('click');
                }
            }
        });
    });

    jQuery('.hint').popover()

    jQuery('.panel-collapse').on('hide.bs.collapse', function () {
        $link = jQuery(this).closest('.panel').find('a[data-toggle=collapse]');
        $link.find("span:last").show();
        $link.find("span:first").hide();
        $link.find("i").removeClass("fa-minus-circle");
        $link.find("i").addClass("fa-plus-circle");
    }).on('show.bs.collapse', function () {
        $link = jQuery(this).closest('.panel').find('a[data-toggle=collapse]');
        $link.find("span:last").hide();
        $link.find("span:first").show();
        $link.find("i").removeClass("fa-plus-circle");
        $link.find("i").addClass("fa-minus-circle");
    });

    jQuery('.sortFilters').on('click', function () {
        jQuery(this).find("i").first().toggleClass("fa-plus-circle");
        jQuery(this).find("i").first().toggleClass("fa-minus-circle");
    });
    jQuery('.panel-productfinder-filter').on('hide.bs.collapse', function () {
        jQuery(this).find("i").first().addClass("fa-plus-circle");
        jQuery(this).find("i").first().removeClass("fa-minus-circle");
    }).on('show.bs.collapse', function () {
        jQuery(this).find("i").first().removeClass("fa-plus-circle");
        jQuery(this).find("i").first().addClass("fa-minus-circle");
    });

    jQuery('.link-tt').click(function(e){
        if(!$(this).hasClass('active-tt')) {
            $(this).addClass('active-tt');
            e.preventDefault();
        } else {
            return true;
        }
    }); 



    // q23.amo - Text Cut
    if (typeof moreText === 'undefined' || moreText === '') {
        moreText = 'Read More';
    }
    if (typeof lessText === 'undefined' || lessText === '') {
        lessText = 'Show Less';
    }
    jQuery('.text-cut-button').html(moreText);
    jQuery('.text-cut-button').click(function(e){
        e.preventDefault();
        $this = jQuery(this);
        $wrapper = $this.closest('.text-cut-wrapper');
        $text = $wrapper.find('.text-cut');
        $this.toggleClass('active');
        $text.toggleClass('active');
        if ($text.hasClass('active')) {
            $this.html(lessText);
        }
        else {
            $this.html(moreText);
        }
    });
    // q23.amo - Review Tabs
    jQuery('.line-tab[data-target]').click(function(e){
        e.preventDefault();
        jQuery('.line-tab').removeClass('active');
        jQuery(this).addClass('active');

        jQuery('.tab-review').addClass('hidden');
        $target = jQuery(this).attr('data-target');
        jQuery($target).removeClass('hidden');
    });
    //q23.jgo toggle tab after page reload
    var hash = window.location.hash.substr(1);
    if (hash=="tab-review-pending") {
        jQuery("div[data-target=#tab-review-pending]").trigger("click");
    }
    if (hash=="tab-review-declined") {
        jQuery("div[data-target=#tab-review-declined]").trigger("click");
    }
    // q23.amo - carousel arrows: disable for first and last item
    jQuery('#review-carousel').carousel({interval: false});
    jQuery('.carousel').on('slid.bs.carousel', function() {
        var $this = jQuery(this);
        if ($this.find('.item:first').hasClass('active')&&$this.find('.item:last').hasClass('active')) {
            $this.children('.left.carousel-control').addClass('is-disabled');
            $this.children('.right.carousel-control').addClass('is-disabled');
        }
        else if($this.find('.item:first').hasClass('active')) {
            $this.children('.left.carousel-control').addClass('is-disabled');
            $this.children('.right.carousel-control').removeClass('is-disabled');
        }
        else if($this.find('.item:last').hasClass('active')) {
            $this.children('.right.carousel-control').addClass('is-disabled');
            $this.children('.left.carousel-control').removeClass('is-disabled');
        }
        else {
            $this.children('.carousel-control').removeClass('is-disabled');
        }
    });
    jQuery( ".carousel" ).trigger( "slid.bs.carousel" );

    jQuery('#yt-modal').click(function(event){
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: jQuery("#product-video").offset().top-15
        }, 2000);
    });
    // q23 - />

    jQuery('a[href="#et_tab-1-top"]').click(function(){
        jQuery('a[href="#et_tab-1"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#engagement-panes").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#go-to-manual-prop').click(function(){
        jQuery('a[href="materiale-informativo"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#materiale-informativo").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#go-to-gallery-prop').click(function(){
        jQuery('a[href="galleria-fotografica"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#galleria-fotografica").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#go-to-product-video-prop').click(function(){
        jQuery('a[href="product-video"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#product-video").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    if(jQuery(window).width() < 768)
    {
        jQuery(document.body).on('click','.go-to-product-video-yt',function(){
            var ytModalTempate =
                '<div class="modal modal-yt fade">' +
                '  <div class="modal-dialog">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                //'        <button type="button" class="close" data-dismiss="modal">&times;</button>' +
                // '        <h4 class="modal-title">I am a dialog</h4>' +
                '      </div>' +
                '      <div class="modal-body">' +
                '			<div id="product-video" class="embed-responsive embed-responsive-16by9">'+
                '			<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/'+jQuery(this).data('yt')+'" frameborder="0" allowfullscreen></iframe>'+
                '			</div>'+
                '      </div>' +
                // '      <div class="modal-footer">' +
                //  '        <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>' +
                //  '        <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>' +
                '      </div>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            jQuery(ytModalTempate).modal();
            jQuery(document.body).on('hidden.bs.modal', function () {
                jQuery(".modal-yt").remove();
            });
        });
    }

     jQuery(document.body).on('click','.go-to-product-video-yt-compare',function(){
            var ytModalTempate =
                '<div class="modal modal-yt fade">' +
                '  <div class="modal-dialog">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header">' +
                //'        <button type="button" class="close" data-dismiss="modal">&times;</button>' +
                // '        <h4 class="modal-title">I am a dialog</h4>' +
                '      </div>' +
                '      <div class="modal-body">' +
                '           <div id="product-video" class="embed-responsive embed-responsive-16by9">'+
                '           <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/'+jQuery(this).data('yt')+'" frameborder="0" allowfullscreen></iframe>'+
                '           </div>'+
                '      </div>' +
                // '      <div class="modal-footer">' +
                //  '        <button type="button" class="btn btn-primary" data-dismiss="modal">Save</button>' +
                //  '        <button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button>' +
                '      </div>' +
                '    </div>' +
                '  </div>' +
                '</div>';
            jQuery(ytModalTempate).modal();
            jQuery(document.body).on('hidden.bs.modal', function () {
                jQuery(".modal-yt").remove();
            });
        });

    jQuery('#go-to-product-video').click(function(){
        jQuery('a[href="product-video"]').trigger('click');
        if (jQuery("#product-video").length) {
            jQuery('html, body').animate({
                scrollTop: jQuery("#product-video").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
            }, 2000);
        }
    });

    jQuery('#go-to-final-vote').click(function(){
        jQuery('a[href="voto-finale"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#voto-finale").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#go-to-best-price').click(function(){
        jQuery('a[href="product-box"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery(".product-box").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#go-to-gallery').click(function(){
        jQuery('a[href="galleria-fotografica"]').trigger('click');
        jQuery('html, body').animate({
            scrollTop: jQuery("#galleria-fotografica").offset().top-jQuery("#megabutton-pd-table-id").outerHeight()-jQuery("#desktop-megabutton-pd").outerHeight()
        }, 2000);
    });

    jQuery('#priceAlertModalForm').submit(function(e) {
        e.preventDefault();

        var checked = jQuery( "#priceAlertModal #tc" ).is(':checked');

        if(checked) 
        {
            jQuery('.form-group-help-text').hide();

            jQuery.ajax(
                {
                    url: "/wp-admin/admin-ajax.php?action=ajax_price_alert",
                    data: {product_id: jQuery('#product_id').val(), price: jQuery('#amount').val(), email: jQuery('#email').val()},
                    success: function (data) 
                    {
                        if(data == 'success-0')
                        {
                            jQuery('#priceAlertModal .modal-footer').hide();	
                            jQuery('#priceAlertModal .load-indicator').fadeOut('slow', function()
                                                                               {
                                jQuery('#priceAlertModal .wrapper').html('<center><i class="fa fa-thumbs-up fa-2x text-success"></i><br /><b class="text-success">Allarme prezzo inserito.</b><br /> Conferma il tuo indirizzo email cliccando sul link che ti abbiamo appena spedito.</center>');					
                            });
                        }
                        else if(data == 'success-1')
                        {
                            jQuery('#priceAlertModal .modal-footer').hide();	
                            jQuery('#priceAlertModal .load-indicator').fadeOut('slow', function()
                                                                               {
                                jQuery('#priceAlertModal .wrapper').html('<center><i class="fa fa-thumbs-up fa-2x text-success"></i><br /><b class="text-success">Allarme prezzo inserito.</b></center>');					
                            });
                        }
                        else if(data == 'updated')
                        {
                            jQuery('#priceAlertModal .modal-footer').hide();	
                            jQuery('#priceAlertModal .load-indicator').fadeOut('slow', function()
                                                                               {
                                jQuery('#priceAlertModal .wrapper').html('<center><i class="fa fa-thumbs-up fa-2x text-success"></i><br /><b class="text-success">Allarme prezzo cambiato.</b></center>');					
                            });
                        }
                    },
                    beforeSend: function()
                    {
                        jQuery('#priceAlertModal .load-indicator').show();
                    }
                });

        }

        return false;
    });

    jQuery("#priceAlertModalForm #tc").on('change',
                                          function() 
                                          {
        if(jQuery("#priceAlertModalForm #tc").is(':checked'))
        {
            jQuery('#submit-alert').removeAttr("disabled");
        }
        else 
        {
            jQuery('#submit-alert').attr('disabled', 'disabled');
        }
    }
                                         );

    jQuery('#productOutputTabs a:first').tab('show');

    jQuery('.autocomplete').keyup(function()
                                  {
        if(jQuery(this).val().length <= 3)
        {
            jQuery('.search-suggestions-wrapper').fadeOut(300);
        }
    });

    jQuery('.navbar-form-search').submit(function(e)
                                         {
        input = jQuery(this).find('.autocomplete').val();
        if(input.length < 1)
        {
            e.preventDefault();
            return false;
        }
        else 
        {
            /*
			justCategories = jQuery('.search-suggestions-wrapper').attr('just-categories');
			if(justCategories == "true")
			{
				if(jQuery('.search-suggestions-wrapper .products-wrapper').length && !jQuery('.search-suggestions-wrapper .categories-wrapper').length)
				{
					firstResultUrl = jQuery('.search-suggestions-wrapper .products-wrapper a').attr('href');
				}
				else if(jQuery('.search-suggestions-wrapper .others-wrapper').length && !jQuery('.search-suggestions-wrapper .categories-wrapper').length)
				{
					firstResultUrl = jQuery('.search-suggestions-wrapper .products-wrapper a').attr('href');
				}

				e.preventDefault();
				console.log(firstResultUrl);
				//window.location = firstResultUrl;
				return false;
			 }
			 */

            firstResultUrl = jQuery('.search-suggestions-wrapper div a').attr('href');
            if(firstResultUrl)
            {
                e.preventDefault();
                ac_action = jQuery('.search-suggestions-wrapper div a').attr('ac-action');
                ac_label = jQuery('.search-suggestions-wrapper div a').attr('ac-label');
                ga('send', 'event', 'search-click', ac_action, ac_label);
                window.location = firstResultUrl;
                return false;
            }

            e.preventDefault();
            return false;
        }


    });

    jQuery( ".autocomplete" ).autocomplete(
        {
            minLength: 3,
            delay: 300,
            source: function (request, response) 
            { 
                jQuery.ajax(
                    {
                        url: "/wp-admin/admin-ajax.php?action=ajax_search",
                        data: request,
                        success: function (data) 
                        {
                            jQuery('.search-suggestions-wrapper').fadeIn(300);
                            jQuery('.search-indicator').delay(300).html('<i class="fa fa-search"></i>');
                            if (window.location == 'https://qualescegliere.it/' || window.location == 'https://test.qualescegliere.it/' ) {
                                action = 'home';
                            } else {
                                action = 'header'
                            }

                            ga('send', 'event', 'search', action, request.term);

                            if(data)
                            {
                                jQuery('.search-suggestions').html('');
                                var results = jQuery.parseJSON(data);
                                categories =  '';
                                products = '';
                                others = '';

                                if(results.category)
                                {
                                    categories += '<div class="categories-wrapper"> <span class="result-type">Categorie <span class="result-count pull-right">'+results.summary.category+'</span></span> <div class="row">';
                                    jQuery.each(results.category, function(index, value)
                                                {
                                        category = value;
                                        img = '';
                                        if(category.thumb)
                                        {
                                            img = '<img src="'+category.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+category.title+"');";
                                        categories += '<a href="'+category.link+'" class="result" ac-action="'+request.term+'" ac-label="'+category.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+category.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    categories += '</div></div>';

                                    jQuery('.search-suggestions').append(categories);
                                }

                                if(results.product)
                                {
                                    products += '<div class="products-wrapper"> <span class="result-type">Prodotti <span class="result-count pull-right">'+results.summary.product+'</span></span><div class="row">';
                                    jQuery.each(results.product, function(index, value)
                                                {
                                        product = value;
                                        img = '';
                                        if(product.thumb)
                                        {
                                            img = '<img src="'+product.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+product.title+"');";
                                        products += '<a href="'+product.link+'" class="result" ac-action="'+request.term+'" ac-label="'+product.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+product.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    products += '</div></div>';
                                }

                                jQuery('.search-suggestions').append(products);

                                if(results.other)
                                {
                                    others += '<div class="others-wrapper"> <span class="result-type">Risultati correlati <span class="result-count pull-right">'+results.summary.other+'</span></span><div class="row">';
                                    jQuery.each(results.other, function(index, value)
                                                {
                                        other = value;
                                        img = '';
                                        if(other.thumb)
                                        {
                                            img = '<img src="'+other.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+other.title+"');";
                                        others += '<a href="'+other.link+'" class="result" ac-action="'+request.term+'" ac-label="'+other.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+other.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    others += '</div></div>';
                                }

                                jQuery('.search-suggestions').append(others);
                            }
                            else 
                            {
                                jQuery('.search-suggestions').html('<div class="error-wrapper">nessun risultato trovato, prova a ridefinire la tua ricerca</div>');
                            }
                        },
                        beforeSend: function()
                        {
                            jQuery('.search-indicator').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
                        },
                    })

            }
        });

    jQuery('.autocomplete-content').keyup(function()
                                          {
        if(jQuery(this).val().length <= 3)
        {
            jQuery('.search-suggestions-wrapper-content').fadeOut(300);
        }
    });

    jQuery('.navbar-form-search').submit(function(e)
                                         {
        input = jQuery(this).find('.autocomplete-content').val();
        if(input.length < 1)
        {
            e.preventDefault();
            return false;
        }
        else 
        {
            /*
			justCategories = jQuery('.search-suggestions-wrapper').attr('just-categories');
			if(justCategories == "true")
			{
				if(jQuery('.search-suggestions-wrapper .products-wrapper').length && !jQuery('.search-suggestions-wrapper .categories-wrapper').length)
				{
					firstResultUrl = jQuery('.search-suggestions-wrapper .products-wrapper a').attr('href');
				}
				else if(jQuery('.search-suggestions-wrapper .others-wrapper').length && !jQuery('.search-suggestions-wrapper .categories-wrapper').length)
				{
					firstResultUrl = jQuery('.search-suggestions-wrapper .products-wrapper a').attr('href');
				}

				e.preventDefault();
				console.log(firstResultUrl);
				//window.location = firstResultUrl;
				return false;
			 }
			 */

            firstResultUrl = jQuery('.search-suggestions-wrapper div a').attr('href');
            if(firstResultUrl)
            {
                e.preventDefault();
                ac_action = jQuery('.search-suggestions-wrapper div a').attr('ac-action');
                ac_label = jQuery('.search-suggestions-wrapper div a').attr('ac-label');
                ga('send', 'event', 'search-click', ac_action, ac_label);
                window.location = firstResultUrl;
                return false;
            }

            e.preventDefault();
            return false;
        }


    });

    jQuery( ".autocomplete-content" ).autocomplete(
        {
            minLength: 3,
            delay: 300,
            source: function (request, response) 
            { 
                jQuery.ajax(
                    {
                        url: "/wp-admin/admin-ajax.php?action=ajax_search",
                        data: request,
                        success: function (data) 
                        {
                            jQuery('.search-suggestions-wrapper-content').fadeIn(300);
                            jQuery('.search-indicator').delay(300).html('<i class="fa fa-search"></i>');
                            if (window.location == 'https://qualescegliere.it/' || window.location == 'https://test.qualescegliere.it/' ) {
                                action = 'home';
                            } else {
                                action = 'header'
                            }

                            ga('send', 'event', 'search', action, request.term);

                            if(data)
                            {
                                jQuery('.search-suggestions').html('');
                                var results = jQuery.parseJSON(data);
                                categories =  '';
                                products = '';
                                others = '';

                                if(results.category)
                                {
                                    categories += '<div class="categories-wrapper"> <span class="result-type">Categorie <span class="result-count pull-right">'+results.summary.category+'</span></span> <div class="row">';
                                    jQuery.each(results.category, function(index, value)
                                                {
                                        category = value;
                                        img = '';
                                        if(category.thumb)
                                        {
                                            img = '<img src="'+category.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+category.title+"');";
                                        categories += '<a href="'+category.link+'" class="result" ac-action="'+request.term+'" ac-label="'+category.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+category.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    categories += '</div></div>';

                                    jQuery('.search-suggestions').append(categories);
                                }

                                if(results.product)
                                {
                                    products += '<div class="products-wrapper"> <span class="result-type">Prodotti <span class="result-count pull-right">'+results.summary.product+'</span></span><div class="row">';
                                    jQuery.each(results.product, function(index, value)
                                                {
                                        product = value;
                                        img = '';
                                        if(product.thumb)
                                        {
                                            img = '<img src="'+product.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+product.title+"');";
                                        products += '<a href="'+product.link+'" class="result" ac-action="'+request.term+'" ac-label="'+product.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+product.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    products += '</div></div>';
                                }

                                jQuery('.search-suggestions').append(products);

                                if(results.other)
                                {
                                    others += '<div class="others-wrapper"> <span class="result-type">Risultati correlati <span class="result-count pull-right">'+results.summary.other+'</span></span><div class="row">';
                                    jQuery.each(results.other, function(index, value)
                                                {
                                        other = value;
                                        img = '';
                                        if(other.thumb)
                                        {
                                            img = '<img src="'+other.thumb+'" class="img-responsive" />';
                                        }

                                        onc = "ga('send', 'event', 'search-click', '"+request.term+"', '"+other.title+"');";
                                        others += '<a href="'+other.link+'" class="result" ac-action="'+request.term+'" ac-label="'+other.title+'" onclick="'+onc+'"><div class="col-xs-12 col-sm-9 result-title"><span class="result-titles">'+other.title+'</span></div><div class="hidden-xs col-sm-3 text-center result-img">'+img+'</div></a>';
                                    });
                                    others += '</div></div>';
                                }

                                jQuery('.search-suggestions').append(others);
                            }
                            else 
                            {
                                jQuery('.search-suggestions').html('<div class="error-wrapper">nessun risultato trovato, prova a ridefinire la tua ricerca</div>');
                            }
                        },
                        beforeSend: function()
                        {
                            jQuery('.search-indicator').html('<i class="fa fa-spinner fa-pulse fa-fw"></i>');
                        },
                    })

            }
        });


    if(jQuery(window).width() < 1200)
    {
        jQuery(".row-content").removeClass('row-toc');
        jQuery(".toc").removeClass('toc-sticky');
    }

    var carousel = jQuery(".carousel"); 
    if(carousel.length)
    {
        jQuery(carousel.not('.carousel-default')).slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                }
            ]
        });
    }

    var carousel = jQuery(".carousel-products"); 
    if(carousel.length)
    {
        var num = 3; 
        if(jQuery("body.home").length || jQuery("body.error404").length)
        {
            num = 6;
        }

        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: num,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    var carousel = jQuery("#carousel-blog"); 
    if(carousel.length)
    {

        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    var carousel = jQuery(".carousel-versus"); 	
    if(carousel.length)
    {
        var num = 3; 

        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: num,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    var carousel = jQuery(".carousel-interviews"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
	
	


    var carousel = jQuery(".carousel-videoreviews"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    var carousel = jQuery(".carousel-reviews"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 1180,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
	
	
    var carousel = jQuery(".variable-width"); 	
    if(carousel.length) {
		jQuery('.variable-width').slick({
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  variableWidth: true
		});
    }
	

	
	
    var carousel = jQuery(".carousel-avm2020flight1"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
			dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev" id="avm-slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="avm-slick-next"></button>',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						initialSlide: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						initialSlide: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
						initialSlide: 1,
                    }
                }
            ]
        });
    }
	
	
	/*
	jQuery('#avm-slick-prev').click(function() {

		  if (jQuery('#avm-slick-prev').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-prev').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-next').show();
	
		  }
	});
	
	jQuery('#avm-slick-next').click(function() {

		  if (jQuery('#avm-slick-next').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-next').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-prev').show();
	
		  }
	});
	
	
    jQuery('#avm-first-card').on( "swipe", function() {

		  if (jQuery('#avm-slick-prev').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-prev').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-next').show();
	
		  }
		  
		  if (jQuery('#avm-slick-next').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-next').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-prev').show();
	
		  }
		  
	} );
	
	
    jQuery('#avm-second-card').on( "swipe", function() {
		
		alert('ciao');
		  if (jQuery('#avm-slick-prev').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-prev').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-next').show();
	
		  }
		  
		  if (jQuery('#avm-slick-next').hasClass("slick-disabled")) {
		  
			  jQuery('#avm-slick-next').hide();
			
		  } else {
		  
	  		  jQuery('#avm-slick-prev').show();
	
		  }
		  
	} );
	*/
 
    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler( event ){
      $( event.target ).addClass( "swipe" );
    }
	

    var carousel = jQuery(".carousel-photos"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 4,
            dots: true,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    }

    var carousel = jQuery(".carousel-test-products"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 1,
            dots: true,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    var carousel = jQuery(".carousel-how-it-works"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: true,
            dotsClass: 'carousel-indicators',
            customPaging : function(slider, i) {
                return ''+(i+1)+'';
            },
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    }

    var carousel = jQuery(".carousel-members"); 	
    if(carousel.length)
    {		
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 5,
            dots: true,
            lazyLoad: 'ondemand',
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
        });
    }

    /* product listing swipeable slider */
   /* if(jQuery(window).width() < 768)
    {
        var carousel = jQuery("#product-grid"); 	
        if(carousel.length)
        {	
            jQuery('.js-products-slick-mobile').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                lazyLoad: 'ondemand',
                prevArrow: '<button type="button" class="slick-new-prev"></button>', 
                nextArrow: '<button type="button" class="slick-new-next"></button>'
            });	

            jQuery(document).scroll(function() {
                if (jQuery(".js-products-slick-mobile").length) {
                    var y = jQuery(this).scrollTop();
                    var x = jQuery(".js-products-slick-mobile").offset().top;
                    var z = x+jQuery(".js-products-slick-mobile").height();
                    if (y > x && y < z-140) {
                        jQuery('.js-products-slick-mobile .slick-arrow').css('position','fixed');
                        jQuery('.js-products-slick-mobile .slick-new-next').css('right','-10px');
                        jQuery('.js-products-slick-mobile .slick-new-prev').css('left','-10px');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('top','100px');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('bottom','unset');
                    }
                    else if (y >= z-140) {
                        jQuery('.js-products-slick-mobile .slick-arrow').css('position','absolute');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('bottom','0px');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('top','unset');
                        jQuery('.js-products-slick-mobile .slick-new-next').css('right','-25px');
                        jQuery('.js-products-slick-mobile .slick-new-prev').css('left','-25px');

                    }
                    else
                    {
                        jQuery('.js-products-slick-mobile .slick-arrow').css('position','absolute');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('bottom','unset');
                        jQuery('.js-products-slick-mobile .slick-arrow').css('top','100px');
                        jQuery('.js-products-slick-mobile .slick-new-next').css('right','-25px');
                        jQuery('.js-products-slick-mobile .slick-new-prev').css('left','-25px');

                    } 
                }
            });	
        }
    }*/




    /*Product Image Gallery Slider*/
    var carousel = jQuery("#product-main-slider"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
            jQuery("#slider-count").text(slick.slideCount);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider .slick-slide').on('click', {}, initImageModal);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal);
        }
    }
	
	
    /*Category product 1 Gallery Slider*/
    var carousel = jQuery("#product-main-slider-category_1"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
			var img_count;
			img_count = jQuery("#slider-img-count-category_1").text();
            jQuery("#slider-count-category_1").text(img_count);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs-category_1',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider-category_1 .slick-slide').on('click', {}, initImageModal_1);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal_1);
        }
    }
	
    /*Category product 2 Gallery Slider*/
    var carousel = jQuery("#product-main-slider-category_2"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
			var img_count;
			img_count = jQuery("#slider-img-count-category_2").text();
            jQuery("#slider-count-category_2").text(img_count);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs-category_2',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider-category_2 .slick-slide').on('click', {}, initImageModal_2);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal_2);
        }
    }
	
    /*Category product 3 Gallery Slider*/
    var carousel = jQuery("#product-main-slider-category_3"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
			var img_count;
			img_count = jQuery("#slider-img-count-category_3").text();
            jQuery("#slider-count-category_3").text(img_count);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs-category_3',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider-category_3 .slick-slide').on('click', {}, initImageModal_3);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal_3);
        }
    }
	
    /*Category product 4 Gallery Slider*/
    var carousel = jQuery("#product-main-slider-category_4"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
			var img_count;
			img_count = jQuery("#slider-img-count-category_4").text();
            jQuery("#slider-count-category_4").text(img_count);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs-category_4',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider-category_4 .slick-slide').on('click', {}, initImageModal_4);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal_4);
        }
    }
	
    /*Category product 5 Gallery Slider*/
    var carousel = jQuery("#product-main-slider-category_5"); 	
    if(carousel.length)
    {	
        carousel.on("init", function(event, slick){
			var img_count;
			img_count = jQuery("#slider-img-count-category_5").text();
            jQuery("#slider-count-category_5").text(img_count);
        });
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#slider-thumbs-category_5',
            prevArrow: '<button type="button" class="slick-prev" id="prev-arrow"></button>', 
            nextArrow: '<button type="button" class="slick-next" id="next-arrow"></button>',
        });

        /* hide modal on mobile */
        if (jQuery(window).width()>768) {
            jQuery('#product-main-slider-category_5 .slick-slide').on('click', {}, initImageModal_5);
            /*open modal on desktop from main product navigation*/
            jQuery('a[href="#galleria-fotografica"]').on('click', {}, initImageModal_5);
        }
    }
	
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }
	
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs-category_1"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider-category_1',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs-category_2"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider-category_2',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs-category_3"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider-category_3',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs-category_4"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider-category_4',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }
	
    /*Product Image Gallery Slider THUMBS*/
    var carousel = jQuery("#slider-thumbs-category_5"); 	
    if(carousel.length)
    {	
        jQuery(carousel).slick({
            infinite: false,
            speed: 100,
            slidesToShow: 4.5,
            slidesToScroll: 1,
            rows: 1,
            dots: false,
            asNavFor: '#product-main-slider-category_5',
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"></button>', 
            nextArrow: '<button type="button" class="slick-next"></button>',
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        focusOnSelect: true,
                        swipeToSlide: true
                    }
                }]
        });
        carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide){
            e.preventDefault();
            e.stopPropagation();
        });

    }

    /* hide modal on mobile */
    //if (jQuery(window).width()>768) {
    //	jQuery('#slider-thumbs .slick-slide').on('click', {}, initImageModal);
    //} 

    /*init slider after modal shown */
    jQuery('#modal-images').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal').not('.slick-initialized').length !=0){
            jQuery('#slider-modal').slick({
                infinite: false,
                lazyLoad: 'ondemand',
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal').slick({
                infinite: false,
                lazyLoad: 'ondemand',
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider').slick('slickCurrentSlide');
        jQuery('#slider-modal').slick('slickGoTo',slidercur,true);
    });
	
	
    /*init slider after modal shown */
    jQuery('#modal-images-category_1').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal-category_1').not('.slick-initialized').length !=0){
            jQuery('#slider-modal-category_1').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal-category_1',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal-category_1').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal-category_1').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal-category_1',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider-category_1').slick('slickCurrentSlide');
        jQuery('#slider-modal-category_1').slick('slickGoTo',slidercur,true);
    });
	
	
    /*init slider after modal shown */
    jQuery('#modal-images-category_2').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal-category_2').not('.slick-initialized').length !=0){
            jQuery('#slider-modal-category_2').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal-category_2',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal-category_2').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal-category_2').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal-category_2',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider-category_2').slick('slickCurrentSlide');
        jQuery('#slider-modal-category_2').slick('slickGoTo',slidercur,true);
    });
	
	
    /*init slider after modal shown */
    jQuery('#modal-images-category_3').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal-category_3').not('.slick-initialized').length !=0){
            jQuery('#slider-modal-category_3').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal-category_3',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal-category_3').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal-category_3').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal-category_3',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider-category_3').slick('slickCurrentSlide');
        jQuery('#slider-modal-category_3').slick('slickGoTo',slidercur,true);
    });
	
	
	
    /*init slider after modal shown */
    jQuery('#modal-images-category_4').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal-category_4').not('.slick-initialized').length !=0){
            jQuery('#slider-modal-category_4').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal-category_4',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal-category_4').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal-category_4').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal-category_4',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider-category_4').slick('slickCurrentSlide');
        jQuery('#slider-modal-category_4').slick('slickGoTo',slidercur,true);
    });
	
	
    /*init slider after modal shown */
    jQuery('#modal-images-category_5').on('shown.bs.modal', function (e) {
        if(jQuery('#slider-modal-category_5').not('.slick-initialized').length !=0){
            jQuery('#slider-modal-category_5').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '#slider-thumbs-modal-category_5',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('#slider-thumbs-modal-category_5').not('.slick-initialized').length !=0){
            jQuery('#slider-thumbs-modal-category_5').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '#slider-modal-category_5',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        var slidercur = jQuery('#product-main-slider-category_5').slick('slickCurrentSlide');
        jQuery('#slider-modal-category_5').slick('slickGoTo',slidercur,true);
    });
	
	

    jQuery('[id^=modal-images-]').on('shown.bs.modal', function (e) {
        if(jQuery('.slider-modal').not('.slick-initialized').length !=0){
            jQuery('.slider-modal').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                asNavFor: '.slider-thumbs-modal',
                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
        }
        if(jQuery('.slider-thumbs-modal').not('.slick-initialized').length !=0){
            jQuery('.slider-thumbs-modal').slick({
                infinite: false,
                speed: 100,
                slidesToShow: 4,
                slidesPerRow: 1,
                slidesToScroll: 1,
                rows: 1,
                dots: false,
                arrows: false,
                asNavFor: '.slider-modal',
                focusOnSelect: true,

                prevArrow: '<button type="button" class="slick-prev"></button>', 
                nextArrow: '<button type="button" class="slick-next"></button>',
            });
            imgsToLoad = jQuery('.slider-thumbs-modal img[data-lazy]');
            if (imgsToLoad.length ) {
                imgsToLoad.each( function () {
                    image = jQuery(this);
                    imageSource = image.attr('data-lazy');
                    image.attr( 'src', imageSource);
                });
            }
        }
        var slidercur = jQuery('#product-main-slider').slick('slickCurrentSlide');
        jQuery('#slider-modal').slick('slickGoTo',slidercur,true);
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    var modal = jQuery('#exitIntent'); 
    if(modal.length)
    {	 
        if(jQuery(window).width() < 768 && getCookie('exitintent') == '')
        {
            var initexitent = false;
            var lastScrollTop = 0;
            jQuery(window).scroll(function(event){
                var st = jQuery(this).scrollTop();
                if (st < lastScrollTop && jQuery(window).scrollTop() > jQuery(".mobile-author-name").offset().top) {
                    setTimeout(function(){
                        if(initexitent==false){
                            initexitent=true;
                            setCookie('exitintent', 'true', 1);
                            jQuery('#exitIntent').modal();
                            setTimeout(
                                function(){
                                    jQuery('.exitintent-slider').slick({
                                        infinite: true,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        arrows: true,
                                        lazyLoad: 'ondemand',
                                        prevArrow: '<button type="button" class="slick-prev"></button>', 
                                        nextArrow: '<button type="button" class="slick-next"></button>'
                                    });
                                }, 200);
                        }
                    }, 2000);
                }
                lastScrollTop = st;
            });
        }
    }

    /* call modal on click */
    function initImageModal(e) {
        jQuery('#modal-images').modal();
        e.preventDefault();
    };
	
    /* call modal on click */
    function initImageModal_1(e) {
        jQuery('#modal-images-category_1').modal();
        e.preventDefault();
    };
	
    /* call modal on click */
    function initImageModal_2(e) {
        jQuery('#modal-images-category_2').modal();
        e.preventDefault();
    };
	
    /* call modal on click */
    function initImageModal_3(e) {
        jQuery('#modal-images-category_3').modal();
        e.preventDefault();
    };
	
    /* call modal on click */
    function initImageModal_4(e) {
        jQuery('#modal-images-category_4').modal();
        e.preventDefault();
    };
	
    /* call modal on click */
    function initImageModal_5(e) {
        jQuery('#modal-images-category_5').modal();
        e.preventDefault();
    };

    function initImageModaltable(e) {
        //console.log(jQuery(this).find(".modal-images").length);
        var modalid = jQuery(this).data('modal');
        jQuery("#modal-images-"+modalid).modal();
        e.preventDefault();
        var ind=jQuery(this).index()+1;

        setTimeout(
            function(ind,modalid) {
                //console.log(ind);
               jQuery("#modal-images-"+modalid + " #slider-thumbs-modal").slick('slickGoTo',ind,true);
                jQuery("#modal-images-"+modalid + " #slider-thumbs-modal > .slick-track .slick-slide").eq(ind).addClass("slick-current").addClass("slick-active");
                setTimeout(
                    function(ind,modalid) {
                        jQuery("#modal-images-"+modalid + " #slider-thumbs-modal").slick('slickGoTo',ind,true);
                        jQuery("#modal-images-"+modalid + " #slider-thumbs-modal > .slick-track .slick-slide").eq(ind).addClass("slick-current").addClass("slick-active");
                    },
                500, ind,modalid);
            },
        500, ind,modalid);
    };

    /* hide modal on mobile */
    if (jQuery(window).width()>768) {
        jQuery('.table-td-image-thumb').on('click', {}, initImageModaltable);
    }

    /*PRODUCT SLIDER END*/

    var arrow = jQuery('#arrow-top'); 
    if(arrow.length)
    {    
        jQuery('#arrow-top').click(function(e) {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000);  
        });
    }

    jQuery("img.lazy").lazyload();
    var toc_num_el = jQuery(".toc-num");
    var toc_num = toc_num_el.attr("id");

    if (toc_num == '') {
        toc_num = 5;
    }

    if (toc_num == 5) {

        jQuery('#toc-category').toc(
            {
                'num': 5,
                'selectors': 'h3',
                'container': '.page-content',
                'counter': true,
                'highlightOffset':0
            }
        );

    } else if (toc_num == 4) {

        jQuery('#toc-category').toc(
            {
                'num': 4,
                'selectors': 'h3',
                'container': '.page-content',
                'counter': true,
                'highlightOffset':0
            }
        );

    }


    jQuery('#toc-product').toc(
        {
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'highlightOffset':0,
            'headerText': function(i, heading, $heading) 
            {
                var text = $heading.text()
                text = text.split(":");
                text = text[0].replace('di QualeScegliere.it', '');
                return text;
            }
        }
    );

    jQuery('#toc-category-service').toc(
        {
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'cutter': false,
            'highlightOffset':0
        }
    );

    jQuery('#toc-category-lite').toc(
        {
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'cutter': false,
            'highlightOffset':0
        }
    );

    jQuery('#toc-brand-page').toc(
        {
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'cutter': false,
            'highlightOffset':0
        }
    );

    jQuery('#toc-landing-page').toc(
        {
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'cutter': false,
            'highlightOffset':0
        }
    );

    jQuery('#toc-content').toc(
        {
            'num': 10,
            'selectors': 'h3',
            'container': '.page-content',
            'counter': true,
            'cutter': false,
            'highlightOffset':0
        }
    );

    jQuery(".dropdown-init").hover(
        function() 
        { 
            if(jQuery(window).width() > 767)
            {
                jQuery('.dropdown-menu', this).fadeIn("fast");
                jQuery(this).addClass('dropdown-active');
                jQuery('.dropdown-menu', this).css("display", "table");
            }
        },
        function() 
        { 
            if(jQuery(window).width() > 767)
            {
                jQuery('.dropdown-menu', this).fadeOut("fast");
                jQuery(this).removeClass('dropdown-active');
            }
        }
    );

    jQuery(".btn-submit").click(
        function() 
        { 
            jQuery(this).parents('form').submit();
        }
    );

    jQuery(".btn-sort").click(
        function() 
        { 
            var sort = jQuery(this).data('sort');
            jQuery('#sort').val(sort);
            jQuery(this).parents('form').submit();
        }
    );

    jQuery(".sort-options").on('change', 
                               function() 
                               {
        jQuery(this).parents('#sort-form').submit();
    }
                              );


    jQuery("#category-relationships-dropdown").on('change', 
                                                  function() 
                                                  {
        var path = jQuery(this).val();
        var go = path;   		
        window.open(go,"_self");
    }
                                                 );


    jQuery(".panel-productfinder-filter form").on('change', 
                                                  function() 
                                                  {
        jQuery(this).submit();
    }
                                                 );



    dropdownWidth();
    dropdownOffset();
    moveProgressBar();
    tocline();

    jQuery( window ).resize(function() 
                            {
        dropdownWidth();
        dropdownOffset();
        moveProgressBar();
        tocline();
    });

    var s = jQuery(".toc-sticky");                 
    jQuery(window).scroll(function() 
                          {

        if(jQuery(window).width() > 767)
        {
            var is_megabutton_visible = false;
            var windowpos = jQuery(window).scrollTop();
            var tocId = s.attr("id");

            switch(tocId) {
                case 'toc-product':

                    //sOffset = 980+600;
                    var offset =jQuery(".page-content").offset();
                    sOffset = offset.top;

                    if (jQuery("#desktop-megabutton-pd").length) {
                        is_megabutton_visible = true;
                    }
                    //sOffset = sOffset + 300;


                    // if(jQuery("#product-video").length)
                    // {
                    //	sOffset = 1570+600;
                    //}
                    break;
                case 'toc-category':
                    var offset =jQuery(".page-content").offset();
                    sOffset = offset.top;

                    /*  if (toc_num == 5) {
					  	sOffset = 1080+125;
					  } else if (toc_num == 4) {
					  	sOffset = 1040+125;
					  }

 			    	  if(jQuery("#product-video").length)
 			    	    {
 			    	    	sOffset = 1200+125;
 			    	    }*/
                    break;

                case 'toc-category-service':
                    sOffset = jQuery(".compare-table").height() + 300+125;
                    break;

                case 'toc-category-lite':
                    sOffset = jQuery(".compare-table").height() + 300+125;
                    break;

                case 'toc-brand-page':
                    /*if (toc_num == 5) {
                        sOffset = 1080+125;
                    } else if (toc_num == 4) {
                        sOffset = 1040+125;
                    }

                    if(jQuery("#product-video").length)
                    {
                        sOffset = 1200+125;
                    }*/

                    var offset =jQuery(".page-content").offset();
                    sOffset = offset.top;

                    break;

                case 'toc-landing-page':
                    /*if (toc_num == 5) {
                        sOffset = 1080+125;
                    } else if (toc_num == 4) {
                        sOffset = 1040+125;
                    }

                    if(jQuery("#product-video").length)
                    {
                        sOffset = 1200+125;
                    }*/
                    var offset =jQuery(".page-content").offset();
                    sOffset = offset.top;
                    break;

                case 'toc-content':
                    sOffset = 280+125;
                    if(jQuery("#product-video").length)
                    {
                        sOffset = 400+125;
                    }
                    break;
                default:
                    sOffset = 980+125;
            }

            //console.log(is_megabutton_visible);

            if (windowpos >= sOffset) {
                if (jQuery(window).width() > 1023) {

                    if (is_megabutton_visible) {
                        s.addClass("stick-mega");
                    } else {
                        s.addClass("stick");
                    }

                } else {

                    if (is_megabutton_visible) {
                        s.addClass("stick-n-mega");
                    } else {
                        s.addClass("stick-n");
                    }

                }

            } else {
                if (jQuery(window).width() > 1023) {
                    s.removeClass("stick");
                    s.removeClass("stick-mega");
                } else {
                    s.removeClass("stick-n");
                    s.removeClass("stick-n-mega");
                }
            }

            tocline();
        }
        // cookiePolicy(true); //set if scroll
    });

    jQuery("#cookie-info-close").click(
        function() 
        { 
            cookiePolicy(true); //set if clicked
        }
    );
    cookiePolicy(false); //check if to show


    var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
        cookieExpire: 1,
        timer: 0,
        sitewide: true,
        callback: function() { 
            jQuery('#ouibounce-modal img').each(function(im, em) 
                                                {
                var imgSrc = jQuery(this).attr('data-src');
                jQuery(this).attr('src', imgSrc);
            });
        }
    });
    jQuery('#ouibounce-modal').on('mousedown', function() {
        jQuery('#ouibounce-modal').hide();
    });

    jQuery('#ouibounce-modal .oui-modal-footer').on('click', function() {
        //jQuery('#ouibounce-modal').hide();
    });

    /*jQuery('#ouibounce-modal .oui-modal .oui-modal-title').on('keypress', function(e) {
 		e.stopPropagation();
 	});*/

    jQuery('#ouibounce-modal .oui-modal').on('mousedown', function(e) {
        e.stopPropagation();
    });

    //compare bar
    var cat_id = null;
    var compareids = [];
    if (typeof compare_ids != "undefined") {

        if (compare_ids!='') {
            compareids =compare_ids.split(',').map(Number);
            cat_id=compareids.shift();
            jQuery(".js-add-product[data-cid!="+cat_id+"]  i").addClass('text-danger').addClass('outline-compare-cross-fill').removeClass('outline-compare-fill').data('toggle',"tooltip").prop('title',"Categoria sbagliata :(").tooltip({container: "body"});
            for (var i = 0; i < compareids.length; i++) {
                jQuery(".js-add-product[data-id="+compareids[i]+"] i").addClass('text-warning').addClass('outline-compare-tick-fill').removeClass('outline-compare-fill').data('toggle',"tooltip").prop('title',"Rimuovi dal confronto").tooltip({container: "body"});
            }
            genereate_compare_url();
        }
    }

    jQuery(".js-add-product").click(function(){
        var that = jQuery(this);
        var id = that.data('id');
        var cid = that.data('cid');
        if (!compareids.includes(id)&&compareids.length<5&&(cat_id==null || cat_id == cid )) {
            cat_id = cid;

            that.find('i').addClass('text-warning').addClass('outline-compare-tick-fill').removeClass('outline-compare-fill').tooltip('destroy').data('toggle',"tooltip").prop('title',"Rimuovi dal confronto").tooltip({container: "body"});
            compareids.push(id);
            var title = that.data('title');
            var ctitle = that.data('ctitle');
            var img = that.data('img');
            jQuery(".compare-bar-product.js-first-empty").before(
                jQuery("<div class='compare-bar-product is_hidden' data-id='"+id+"'>").html('<i class="js-remove-product outline outline-trash-fill" data-id="'+id+'"></i>'+
                                                                                  '<img src="'+img+'"/>'+
                                                                                  '<span>'+title+'</span>'
                                                                                 )
            );
            jQuery("#compare-category-name").html(ctitle);
            jQuery(".js-add-product[data-cid!="+cat_id+"] i").addClass('text-danger').addClass('outline-compare-cross-fill').removeClass('outline-compare-fill').data('toggle',"tooltip").prop('title',"Categoria sbagliata :(").tooltip({container: "body"});
            genereate_compare_url();
            setTimeout(function(){
                jQuery('.compare-bar-product').removeClass('is_hidden');
            }, 200);
        }
        else if(compareids.includes(id))
        {
            jQuery(".js-add-product[data-id="+id+"] i").removeClass('text-warning').addClass('outline-compare-fill').removeClass('outline-compare-tick-fill').tooltip('destroy').data('toggle',"tooltip").prop('title',"Aggiungi al confronto").tooltip({container: "body"});
            jQuery(".compare-bar-product[data-id="+id+"]").remove();
            var index = compareids.indexOf(id);
            if (index > -1) {
                compareids.splice(index, 1);
            }
            genereate_compare_url();
        }
      
    });
    jQuery("body").on('click','.compare-bar-product',function(){
        var that = jQuery(this);
        var id = that.data('id');
        if (compareids.includes(id)) {
            jQuery(".js-add-product[data-id="+id+"] i").removeClass('text-warning').addClass('outline-compare-fill').removeClass('outline-compare-tick-fill').tooltip('destroy').data('toggle',"tooltip").prop('title',"Aggiungi al confronto").tooltip({container: "body"});
            jQuery(".compare-bar-product[data-id="+id+"]").remove();
            var index = compareids.indexOf(id);
            if (index > -1) {
                compareids.splice(index, 1);
            }
            genereate_compare_url();
        }
    });
    function genereate_compare_url() {

        var baseurl = '';
            if (window.location.hostname == 'qsmb.q23.de') {
                baseurl = '/wordpress'
            }
        //jQuery(".js-add-product[data-cid="+cat_id+"] i").tooltip('destroy');
        jQuery(".js-add-product[data-cid="+cat_id+"] i:not(.text-warning)").tooltip('destroy').data('toggle',"tooltip").prop('title',"Aggiungi al confronto").tooltip({container: "body"});
        if (compareids.length==0) {
            cat_id = null;
            jQuery(".js-add-product i").removeClass('text-danger').addClass('outline-compare-fill').removeClass('outline-compare-cross-fill').removeClass('outline-compare-tick-fill');
            jQuery("#compare-category-name").html('');
        }
        else
        {
          
            var save_compare = jQuery.ajax({
                type: "POST",
                url: baseurl+"/wp-admin/admin-ajax.php",
                data: {
                    action     : 'compare_products_action', 
                    compareids : cat_id+','+compareids.join(),
                    ref: window.location.href
                }});

            if ((compareids.length>4)) {
                jQuery(".js-add-product[data-cid="+cat_id+"] i:not(.text-warning)").data('toggle',"tooltip").prop('title',"Hai già selezionato 5 prodotti!").tooltip({container: "body"});
            }
        }

        jQuery("#compare-count").html(compareids.length);
        jQuery('#compare-share').attr('href','mailto:?subject=Compara!&body='+window.location.protocol+'//'+window.location.hostname+baseurl+'/confronto?pids='+cat_id+','+compareids.join());

        if (compareids.length>1) {
            jQuery('#compare-button').removeAttr('disabled');
            jQuery('#compare-button').attr('href',window.location.protocol+'//'+window.location.hostname+baseurl+'/confronto?pids='+cat_id+','+compareids.join());
            jQuery('#compare-button').removeClass('compare-bar-info-opener');
            jQuery('#compare-count-multi').show();
            jQuery('#compare-count-single').hide();
        }
        else
        {
            jQuery('#compare-button').attr('disabled',true);
            jQuery('#compare-button').removeAttr('href');
            jQuery('#compare-count-multi').hide();
            jQuery('#compare-count-single').show();
        }
        if (compareids.length >= 1) {
            jQuery('#compare-bar-opener').addClass('is_active').attr('data-count', compareids.length);
        }
        else {
            jQuery('#compare-bar-opener').removeClass('is_active');
        }
    }
    jQuery("#compare-button").click(function(){
        if (jQuery(this).hasClass("compare-bar-info-opener")) {
            jQuery("#modal-compare-info").modal('show');
        }
    });
    jQuery("#compare-bar-info").click(function(){
        jQuery("#modal-compare-info").modal('show');
    });
    jQuery("#compare-bar-info2").click(function(){
        jQuery("#modal-compare-info").modal('show');
    });
    jQuery("#compare-bar-close").click(function(){
        jQuery("#compare-bar").hide();
        jQuery("#compare-bar-opener").show();
    });
    jQuery("#compare-bar-opener").click(function(){
        jQuery("#compare-bar").show();
        jQuery("#compare-bar-opener").hide();
    });
});



function dropdownWidth()
{
    var vpw = jQuery( '.container-navbar' ).width();
    jQuery('.drop-down-menu-0').width(vpw);
}

function dropdownOffset()
{
    var dOffset = 0;
    jQuery(".dropdown-init").each(function(di, de)
                                  {
        var dropDownOffset = dOffset;
        if(di > 0)
        {
            addOffset = jQuery(this).children('.drop-down-menu-0 li').length;
            dropDownOffset = dropDownOffset+addOffset+1;
        }
        jQuery(this).children('.drop-down-menu-0').css('left', '-'+dropDownOffset+'px');
        dOffset=dOffset+jQuery(this).outerWidth(true);
    });
}

function moveProgressBar() {
    jQuery('.rprogress-wrap').each(function(i, e) {

        var getPercent = (jQuery(e).data('progress-percent') / 100);
        var getProgressWrapWidth = jQuery(e).width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = jQuery(e).data('speed');

        jQuery(e).find('.rprogress-bar').stop().animate({
            left: progressTotal
        }, animationLength);

    });
}

function tocline()
{
    var container = jQuery(".container-page .row-toc");
    if(container)
    {
        var containerHeight = container.outerHeight(true);
        jQuery( "#tocline" ).remove();
        jQuery('<style id="tocline">.container-page .row-toc:before {height: ' + containerHeight + 'px;}</style>').appendTo('head');
    }
}

function replaceImg(url)
{
    jQuery('#main-image').attr('src', url);
}

function replaceImgBottom(url)
{
    jQuery('#main-image-bottom').attr('src', url);
}

function cookiePolicy(setCookie)
{
    if(setCookie)
    {
        Cookies.set('viewed_cookie_policy', 'yes', { expires: 365 });
        jQuery('#cookie-info').addClass('hidden');
    }
    else 
    {
        if(!Cookies.get('viewed_cookie_policy'))
        {
            jQuery('#cookie-info').removeClass('hidden');
        }
    }
}

// q23.amo - pos sticky via js
function posSticky() {
    jQuery('.js_sticky').each(function(){
        var container = jQuery(this);
        var posTop = container.position().top;
        var items = container.find('.js_sticky-item');
        jQuery(window).scroll(function(){
            posTop = container.position().top;
            var conHeight = container.outerHeight();
            var wScroll = jQuery(window).scrollTop();
            if(wScroll > posTop) {
                container.addClass('is_stuck').removeClass('is_down');
                if(wScroll > (posTop + conHeight)) {
                    container.removeClass('is_stuck').addClass('is_down');
                }
            }
            else {
                container.removeClass('is_stuck is_down');
            }
        });
    });
}
function paginateTable() {
    if (jQuery('.js_table_forward').length) {
        if (jQuery('.comparison-table-desktop').find('tr').eq(2).find('td').length == jQuery('.comparison-table-desktop').find('td:visible:last').index()) {
            jQuery('.th_comparison-table-icons').parent().hide();
        }
        else
        {
            jQuery(".js_products_all").html(jQuery('.comparison-table-desktop').find('tr').eq(2).find('td').length );
            jQuery(".js_products_current").html("1 - " +jQuery('.comparison-table-desktop').find('td:visible:last').index());
            jQuery('.js_table_backward').addClass('js_table_backward--disabled');
        }
    }
    jQuery('.js_table_forward').click(function(){
        
        var first_col = jQuery('.comparison-table-desktop').find('td:visible:first').index();
        var last_col = jQuery('.comparison-table-desktop').find('td:visible:last').index() + 1 ;
        var last_col_selector = jQuery('.comparison-table td:nth-of-type('+last_col+')');
        var next_last_col_selector = jQuery('.comparison-table td:nth-of-type('+(last_col+1)+')');
        if (last_col_selector.length) {
            jQuery(".js_products_current").html(first_col + 1 + " - " + last_col);
            jQuery('.comparison-table td:nth-of-type('+first_col+')').not('.store-img,.price').hide();
            last_col_selector.not('.store-img,.price').css('cssText','display:table-cell !important');
            jQuery('.js_table_backward').removeClass('js_table_backward--disabled');
            if (!next_last_col_selector.length) {
                jQuery('.js_table_forward').addClass('js_table_forward--disabled');
            }
        }
        jQuery("img.lazy").lazyload();
    });
    jQuery('.js_table_backward').click(function(){
        var first_col = jQuery('.comparison-table-desktop').find('td:visible:first').index() -1 ;
        var last_col = jQuery('.comparison-table-desktop').find('td:visible:last').index() ;
        var first_col_selector = jQuery('.comparison-table td:nth-of-type('+first_col+')');
        var next_first_col_selector = jQuery('.comparison-table td:nth-of-type('+(first_col-1)+')');
        if (first_col_selector.length) {
             jQuery(".js_products_current").html(first_col + " - " + (last_col - 1));
            jQuery('.comparison-table td:nth-of-type('+last_col+')').not('.store-img,.price').hide();
            first_col_selector.not('.store-img,.price').css('cssText','display:table-cell !important');
            jQuery('.js_table_forward').removeClass('js_table_forward--disabled');
            if (!next_first_col_selector.length) {
                jQuery('.js_table_backward').addClass('js_table_backward--disabled');
            }
        }
    });
}