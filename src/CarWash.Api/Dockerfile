# Build stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

COPY ["src/CarWash.Api/CarWash.Api.csproj", "src/CarWash.Api/"]
# se houver projetos referenciados, copie-os também (ajuste conforme solution)
COPY . .

RUN dotnet restore "src/CarWash.Api/CarWash.Api.csproj"
RUN dotnet publish "src/CarWash.Api/CarWash.Api.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80
ENTRYPOINT ["dotnet", "CarWash.Api.dll"]