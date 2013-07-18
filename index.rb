#index.rb 
require "sinatra"



class WebApp < Sinatra::Base
  attr_reader :og_img, :meta_desc

  def initialize(app = nil, params = {})
    super(app)
    @og_img = "logo"
    @meta_desc = "Index Coffee’s mission is to show you that making absolutely amazing coffee at home isn’t scary at all. In fact it’s fun."
  end

  configure do
    helpers do
      def title(str = nil)
        # helper for formatting your title string
        if str
          str + ' | Index Coffee Company'
        else
          'Index Coffee Company'
        end
      end
      def body_class(str = nil)
        # helper for formatting your title string
        if str
          str + ' page'
        else
          'page'
        end
      end  
      def og_image(str = "logo")
        str
      end
    end

    module StyleSheets
      def css *files
        @css ||= []
        @css = args
      end

      def styles(*args)
          css = []
          css << settings.css if settings.respond_to?('css')
          css << args
          css << @css if @css
          result = css.flatten.uniq.map do |stylesheet| 
            "<link href='/stylesheets/#{stylesheet}.css' media='screen, projection' rel='stylesheet' />"
          end    
          result.join
      end
    end

    helpers StyleSheets

  end
  
  get '/' do  
    @style = :"index-home" 
    @title = title "Your Best Coffee At Home"   
    @body_class = body_class "home-page"   
    erb :index 
  end 

  get '/service' do 
    @style = :"index-service" 
    @title = title "Tasty Coffee Service in Pittsburgh"
    erb :service  
  end 

  get '/education' do  
    erb :education 
  end 

  # get '/invest' do  
  #   erb :invest 
  # end 

  get '/commentcard' do  
    erb :commentcard 
  end

  get '/top-coffee-shops' do  
    @og_img = "logo_golden_cup"  
    @meta_desc = "The Golden Cup is awarded only to the highest caliber of specialty coffee shops around the world in recognition of their superlative skill and taste in coffee."      
    @style = :"index-gallery"
    @title = title "Top Coffee Shops"  
    erb :gallery 
  end

  get '/guides' do  
    erb :'guides/index' 
  end 

  get '/guides/espresso-drinks' do  
    @style = :"index-home"
    @title = title "Espresso Drinks Guide" 
    erb :'guides/espresso-drinks' 
  end 

  get '/guides/french-press' do 
    @style = :"index-guides"
    @title = title "How to French Press" 
    erb :'guides/french-press' 
  end 

end

WebApp.run!

